import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class CampaignEditForm extends React.Component {
  constructor(props) {
    super(props)

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formSection = this.formSection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.saveCampaign = this.saveCampaign.bind(this);
    this.parseDuration = this.parseDuration.bind(this);
  }

  toMysqlFormat(dateObj) {
    return dateObj.getUTCFullYear() + "-" + this.twoDigits(1 + dateObj.getUTCMonth()) + "-" + this.twoDigits(dateObj.getUTCDate());
  }

  twoDigits(d) {
      if(0 <= d && d < 10) return "0" + d.toString();
      if(-10 < d && d < 0) return "-0" + (-1*d).toString();
      return d.toString();
  }

  componentDidMount() {
    $("#uploadThumbnailImage").unsigned_cloudinary_upload(
      "startupgogo_campaign",{ cloud_name: 'dhh1nask4' }
    ).bind('cloudinarydone', (e, data) => {
      this.props.receiveImage();
      console.log('jquery1');
      this.setState({
        card_image_url: data.result.url
      });
    });

    $("#uploadPitchImage").unsigned_cloudinary_upload(
      "startupgogo_pitch",{ cloud_name: 'dhh1nask4' }
    ).bind('cloudinarydone', (e, data) => {
      this.props.receiveImage();
      console.log('jquery2');
      this.setState({
        pitch_image_url: data.result.url
      });
    });

    this.props.requestSingleCampaign(this.props.params.id)
  }

  componentDidUpdate() {
    $("#uploadThumbnailImage").unsigned_cloudinary_upload(
      "startupgogo_campaign",{ cloud_name: 'dhh1nask4' }
    ).bind('cloudinarydone', (e, data) => {
      this.props.receiveImage();
      console.log('jquery1');
      this.setState({
        card_image_url: data.result.url
      });
    });

    $("#uploadPitchImage").unsigned_cloudinary_upload(
      "startupgogo_pitch",{ cloud_name: 'dhh1nask4' }
    ).bind('cloudinarydone', (e, data) => {
      this.props.receiveImage();
      console.log('jquery2');
      this.setState({
        pitch_image_url: data.result.url
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    // on intial get campaign call or new Campaign Content
    if (!this.state.title || this.state.title !== nextProps.campaign.title) {
      this.setState(nextProps.campaign);
    }
  }

  update(property) {
    if (property === 'duration') {
      return e => {
        let targetValue = e.target.value;
        if (typeof targetValue !== "undefined" && targetValue >= 0 && targetValue !== "") {
          this.setState({[property]: this.parseDuration(e.target.value)});
        } else {
          this.setState({[property]: ""});
        }
      }
    } else {
      return e => this.setState({[property]: e.target.value});
    }
  }

  endDateToDuration(endDate) {
    if (endDate) {
      let endDateArray = endDate.split("-");
      let endDateFormatted = endDateArray[1]+","+endDateArray[2]+","+endDateArray[0];
      let timestamp = new Date(endDateFormatted).getTime();
      let durationLeft = timestamp - new Date();
      return Math.round(durationLeft / (86400000));
    }
  }

  parseDuration(lengthOfCampaign) {
    let duration = parseInt(lengthOfCampaign);
    let currentDate = new Date();
    let endDate = currentDate.setDate(currentDate.getDate() + duration);
    let dateObj = new Date(endDate);

    return this.toMysqlFormat(dateObj);
  }

  handleSubmit(e) {
    e.preventDefault();
    let campaign = this.state;
    this.props.updateCampaign({campaign});

    let campaignId = this.props.params.id;
    this.props.router.push(`/campaigns/${campaignId}`);
  }

  handleSave(e) {
    e.preventDefault();
    let campaign = this.state;
    this.saveCampaign(campaign);

    let currentPath = this.props.currentPath();
    let campaignId = this.props.params.id;
    switch(currentPath) {
      case "basics":
        this.props.router.push(`/campaigns/${campaignId}/edit/story`);
    }
  }

  saveCampaign(state) {
    this.props.updateCampaign({ campaign: state });
  }

  formSection(currentPath) {

    if (currentPath === "basics") {

      const thumbnailImage = () => {
        if (this.state.card_image_url !== "" && this.state.card_image_url != null) {
          return(
            <img className="thumbnail-image" src={this.state.card_image_url} />
          )
        } else {
          return (
            <div className="blank-image blank"></div>
          )
        }
      }

      const buttonClass = () => {
        return (this.props.loading) ? "button loading" : "button";
      }

      const buttonStatus = () => {
        return (this.props.loading) ? "disabled" : "enabled";
      }

      const handleImageClick = (e) => {
        e.preventDefault();
        this.props.uploadImage();
        document.getElementById('uploadThumbnailImage').click();
      }

      const daysLeft = (endDate) => {
        if (typeof endDate === "undefined") {
          return "";
        } else {
          return this.endDateToDuration(endDate);
        }
      }

      return(
        <div className="form-section">
          <h4>Basics</h4>
          <label>Campaign Title<br/>
            <span className="form-sub-title">What is the title of your startup pitch?</span><br/>
            <input type="text"
              value={this.state.title}
              onChange={this.update('title')}/><br/>
          </label>
          <label>Funding Goal<br/>
            <span className="form-sub-title">How much money would you like to raise?</span><br/>
            <span className="currency-symbol">$ <input
              type="text"
              value={this.state.goal_amount}
              onChange={this.update('goal_amount')}/></span>
          </label><br/>
          <label>Tagline<br/>
            <span className="form-sub-title">Write a short description that sums up your idea.</span><br/>
            <input type="text"
              className="campaign-form-tagline"
              value={this.state.tagline}
              onChange={this.update('tagline')}/>
          </label><br/>
        <label>Campaign Thumbnail Image<br/>
            <span className="form-sub-title">Upload a square image to represent your campaign.</span><br/>
            { thumbnailImage() }<br/>
            <span id="fake-upload-button"
              className={`${buttonClass()} image-button`}
              disabled={buttonStatus()}
              onClick={this.handleImageClick}>Upload Image</span>
            <input id="uploadThumbnailImage"
              type="file"
              name="file"/><br/>
          </label>
          <label>Location<br/>
            <span className="form-sub-title">Where will your startup be based?</span><br/>
            <input type="text"
              value={this.state.location}
              onChange={this.update('location')}/>
          </label><br/>
          <label>Duration<br/>
            <span className="form-sub-title">How many days would you like to run your campaign for?</span><br/>
            <input type="text"
              className="campaign-duration-input"
              value={daysLeft(this.state.duration)}
              onChange={this.update('duration')}/>
          </label><br/>
          <div className="form-button-container">
            <span className="clickable button" onClick={this.handleSave}>Save & Continue</span>
          </div>
        </div>
      )
    } else if (currentPath === "story") {

      const pitchImage = () => {
        if (this.state.pitch_image_url !== "" && this.state.pitch_image_url != null) {
          return(
            <img className="thumbnail-image" src={this.state.pitch_image_url} />
          )
        } else {
          return (
            <div className="blank-image blank"></div>
          )
        }
      }

      const buttonClass = () => {
        return (this.props.loading) ? "button loading" : "button";
      }

      const buttonStatus = () => {
        return (this.props.loading) ? "disabled" : "enabled";
      }

      const handleImageClick = (e) => {
        e.preventDefault();
        this.props.uploadImage();
        document.getElementById('uploadPitchImage').click();
      }

      return (
        <div className="form-section form-story-section">
          <h4>Story</h4>
          <label>Pitch Image<br/>
            <span className="form-sub-title">Upload a main image for your pitch.</span><br/>
            { pitchImage() }<br/>
            <span id="fake-upload-button"
              className={`${buttonClass()} image-button`}
              disabled={buttonStatus()}
              onClick={this.handleImageClick}>Upload Image</span>
            <input id="uploadPitchImage"
              type="file"
              name="file"/><br/>
          </label><br/>
          <label>Overview<br/>
            <span className="form-sub-title">Write a short overview about your startup idea, and what makes it great.</span><br/>
            <textarea onChange={this.update('campaign_overview')}
                      value={this.state.campaign_overview}>
            </textarea>
          </label><br/>
          <label>Campaign Pitch<br/>
            <span className="form-sub-title">Pitch your startup idea. Tell potential contributors why they should contribute.</span><br/>
            <textarea onChange={this.update('campaign_pitch')}
                      value={this.state.campaign_pitch}>
            </textarea>
          </label><br/>
          <div className="form-button-container">
            <span id="#review-and-launch-campaign" className="clickable button" onClick={this.handleSubmit}>Review &amp; Launch</span>
          </div>
        </div>
      )
    }
  }

  render() {
    console.log(this.context);
    return(
      <div className="campaign-edit-form-container container">
        <form onSubmit={this.handleSubmit}>
          {this.formSection(this.props.currentPath())}
        </form>
      </div>
    )
  }
}

CampaignEditForm.contextTypes = {
  selectedTab: React.PropTypes.string,
  formState: React.PropTypes.object
}

export default withRouter(CampaignEditForm);
