import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateProfile(this.state);
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
          <label>Profile image<br/>
            <input type="file"
              name="profileImageUrl"
              accept="image/x-png, image/gif, image/jpeg"
              value={this.state.photo_url}
              onChange={this.update('photo_url')}/>
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
