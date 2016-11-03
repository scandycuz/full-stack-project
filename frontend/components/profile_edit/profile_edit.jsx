import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.params.id,
      email: "",
      first_name: "",
      last_name: "",
      country: "",
      city: "",
      postal_code: "",
      description: "",
      about: "",
      photo_url: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $("#uploadProfileImage").unsigned_cloudinary_upload("startupgogo_profile",{ cloud_name: 'dhh1nask4' });
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.photo_url !== "") {
      this.props.updateProfileWithImage(this.state);
    } else {
      this.props.updateProfile(this.state);
    }
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

    return(
      <div className="editProfile-tab">


        <form className="editProfile-form">

          <label>First Name<br/>
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}/>
          </label><br/>
          <label>Last Name<br/>
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}/>
          </label><br/>
          <label>Profile image<br/>
            <input id="uploadProfileImage" type="file" name="file"/>
          </label>
          <div className="button-container">
            <button>Save</button>
          </div>
        </form>
      </div>
    )
  }

}

export default withRouter(ProfileEdit);
