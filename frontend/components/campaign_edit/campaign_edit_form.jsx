import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class CampaignEditForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.campaign;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formSection = this.formSection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.saveCampaign = this.saveCampaign.bind(this);
  }

  componentDidMount() {
    $("#uploadThumbnailImage").unsigned_cloudinary_upload(
      "startupgogo_campaign",{ cloud_name: 'dhh1nask4' }
    ).bind('cloudinarydone', (e, data) => {
      // this.props.receiveImage();
      this.setState({
        card_image_url: data.result.url
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState(

      nextProps.campaign, () => {
        let endDate = this.state.duration;

        if (endDate) {
          let endDateArray = endDate.split("/");
          let endDateTimestamp = endDateArray[1]+","+endDateArray[0]+","+endDateArray[2];
          endDateTimestamp = new Date(endDateTimestamp).getTime();
          let durationLeft = endDateTimestamp - new Date();
          let durationDays =  Math.ceil(durationLeft / (86400000));
          this.setState({ duration: durationDays });
        }
      }
    );

  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {

  }

  handleSave(e) {
    e.preventDefault();
    let duration = parseInt(this.state.duration);
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + duration);
    let  dd = currentDate.getDate();
    let mm = currentDate.getMonth() + 1;
    let y = currentDate.getFullYear();
    let formattedDate = `${dd}/${mm}/${y}`;

    this.setState(
      { duration: formattedDate },
      this.saveCampaign(this.state)
    );
  }

  saveCampaign(state) {
    this.props.updateCampaign({ campaign: this.state });
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
        <label>Campaign Thumbnail image<br/>
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
              value={this.state.duration}
              onChange={this.update('duration')}/>
          </label><br/>
          <div className="form-button-container">
            <span className="clickable button" onClick={this.handleSave}>Save & Continue</span>
          </div>
        </div>
      )
    } else if (currentPath === "story") {
      return (
        <h4>Story</h4>
      )
    }
  }

  render() {

    return(
      <div className="campaign-edit-form-container container">
        <form onSubmit={this.handleSubmit}>
          {this.formSection(this.props.currentPath())}
        </form>
      </div>
    )
  }
}

export default withRouter(CampaignEditForm);
