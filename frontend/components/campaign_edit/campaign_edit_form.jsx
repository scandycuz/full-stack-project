import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class CampaignEditForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.campaign;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formSection = this.formSection.bind(this);
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

  componentDidUpdate() {
    console.log(this.state);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.campaign);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.updateProfile({campaign: this.state});
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
        <div class="form-section">
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
          <label>Thumbnail image<br/>
            { thumbnailImage() }<br />
            <span id="fake-upload-button"
              className={`${buttonClass()} image-button`}
              disabled={buttonStatus()}
              onClick={this.handleImageClick}>Upload Image</span>
            <input id="uploadThumbnailImage"
              type="file"
              name="file"/>
          </label>
        </div>
      )
    } else if (currentPath === "story") {
      <h4>Story</h4>
    }
  }

  render() {
    const currentPath = this.props.currentPath();

    return(
      <div className="campaign-edit-form-container container">
        <form onSubmit={this.handleSubmit}>
          {this.formSection(currentPath)}
        </form>
      </div>
    )

  }
}

export default withRouter(CampaignEditForm);
