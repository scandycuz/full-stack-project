import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.profile;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  componentDidMount() {
    $("#uploadProfileImage").unsigned_cloudinary_upload(
      "startupgogo_profile",{ cloud_name: 'dhh1nask4' }
    ).bind('cloudinarydone', (e, data) => {
      this.props.receiveImage();

      this.setState({
        photo_url: data.result.url,
        small_photo_url: data.result.eager[0].secure_url
      });
    });

    this.props.requestSingleProfile(this.props.params.id)
  }

  componentWillReceiveProps(nextProps) {

    if (!this.state.first_name) {
      this.setState(nextProps.profile);
    }
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.updateProfile({profile: this.state});
  }

  handleImageClick(e) {
    e.preventDefault();
    this.props.uploadImage();

    document.getElementById('uploadProfileImage').click();
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map((error) => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render() {

    const profileImage = () => {
      if (this.state.photo_url !== "" && this.state.photo_url != null) {
        return(
          <img className="profile-image" src={this.state.photo_url} />
        )
      } else {
        return (
          <div className="blank-image blank"></div>
        )
      }
    }

    const buttonClass = () => {
      return (this.props.loading.image) ? "button loading" : "button";
    }

    const buttonStatus = () => {
      return (this.props.loading.image) ? "disabled" : "enabled";
    }

    const submitButtonClass = () => {
      if (this.props.loading.image) {
        return 'button loading'
      } else {
        return 'button';
      }
    }

    return(
      <form className="editProfile-form group" onSubmit={this.handleSubmit}>
        <div className="editProfile-tab group">
          <h3>Basic Info</h3>
          <div className="grid-6 alpha">
            <label>First Name<br/>
              <input
                type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}/>
            </label>
          </div>
          <div className="grid-6 omega">
            <label>Last Name<br/>
              <input
                type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}/>
            </label>
          </div>
          <div className="grid-6 alpha">
            <label>Email<br/>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')}/>
            </label>
          </div>
          <div className="grid-6 omega">
            <label>Country<br/>
              <input
                type="text"
                value={this.state.country}
                onChange={this.update('country')}/>
            </label>
          </div>
          <div className="grid-6 alpha">
            <label>City<br/>
              <input
                type="text"
                value={this.state.city}
                onChange={this.update('city')}/>
            </label>
          </div>
          <div className="grid-6 omega">
            <label>Postal Code<br/>
              <input
                type="text"
                value={this.state.postal_code}
                onChange={this.update('postal_code')}/>
            </label>
          </div>
      </div>

      <div className="editProfile-tab group">
          <h3>Details</h3>
          <div className="grid-12 alphaomega">
            <label>Description<br/>
              <input
                type="text"
                value={this.state.description}
                onChange={this.update('description')}/>
            </label>
          </div>
          <div className="grid-12 alphaomega">
            <label>About Me<br/>
              <textarea onChange={this.update('about')} value={this.state.about}>
              </textarea>
            </label>
          </div>
          <div className="grid-12 alphaomega">
            <label>Profile image<br/>
              { profileImage() }<br />
              <span id="fake-upload-button"
                className={`${buttonClass()} image-button`}
                disabled={buttonStatus()}
                onClick={this.handleImageClick}>Upload Image</span>
              <input id="uploadProfileImage"
                type="file"
                name="file"/>
            </label>
          </div>
        </div>
        <div className="button-container">
          <button className={submitButtonClass()}>Save</button>
        </div>
      </form>
    )
  }

}

export default withRouter(ProfileEdit);
