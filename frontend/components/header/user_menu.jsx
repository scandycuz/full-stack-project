import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      formType: "",
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }

    this.renderModal = this.renderModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.setFormToSignup = this.setFormToSignup.bind(this);
    this.setFormToLogin = this.setFormToLogin.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openSignupModal() {
    this.setFormToSignup();
    this.openModal();
  }

  openLoginModal() {
    this.setFormToLogin()
    this.openModal();
  }

  setFormToSignup() {
    this.setState({formType: "signup"});
  }

  setFormToLogin() {
    this.setState({formType: "login"});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
  }

  renderErrors() {
    return(
      <ul className="errors-list">
        {this.props.errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.closeModal();
    const user = this.state;
    return this.props.processForm(this.state.formType)({user});
  }

  renderModal() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        transform             : 'translate(-50%, -50%)'
      }
    };

    const buttonLabel = (this.state.formType === "login") ? "Login" : "Sign up";

    const signupForm = () => (
      <form onSubmit={this.handleSubmit} className="login-form-box">
        <label> First Name:
          <input type="text"
                 className="login-input"
                 value={this.state.first_name}
                 onChange={this.update("first_name")}/>
        </label>
        <label> Last Name:
          <input type="text"
                 className="login-input"
                 value={this.state.last_name}
                 onChange={this.update("last_name")}/>
        </label>
        <label> Email:
          <input type="text"
                 className="login-input"
                 value={this.state.email}
                 onChange={this.update("email")}/>
        </label>
        <label> Password:
          <input type="password"
                 className="login-input"
                 value={this.state.password}
                 onChange={this.update("password")} />
        </label>
        <button className="button">{ buttonLabel }</button>
      </form>
    );

    const loginForm = () => (
      <form onSubmit={this.handleSubmit} className="login-form-box">
        <label> Email:
          <input type="text"
                 className="login-input"
                 value={this.state.email}
                 onChange={this.update("email")}/>
        </label>
        <label> Password:
          <input type="password"
                 className="login-input"
                 value={this.state.password}
                 onChange={this.update("password")} />
        </label>
        <button className="button">{ buttonLabel }</button>
      </form>
    );

    if (this.state.formType === "login") {
      return(
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="User Auth" >

          <p>Log in</p>
          {loginForm()}
          {this.renderErrors()}
          <p>
            Already have an account?&nbsp;
            <span className="clickable" onClick={this.setFormToSignup}>Signup</span>
          </p>

        </Modal>
      );
    } else {
      return(
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="User Auth" >

            <p>Sign up</p>
            {signupForm()}
            {this.renderErrors()}
            <p>
              Already have an account?&nbsp;
              <span className="clickable" onClick={this.setFormToLogin}>Login</span>
            </p>
        </Modal>
      );
    }
  }

  toggleDropdown(e) {
    const toggleVisibility = ($el) => {
      let	visibility = $el.css('visibility');
      if (visibility === 'visible') {
        return $el.css('visibility', 'hidden');
      } else {
        return $el.css('visibility', 'visible');
      }
    }

    let $targetEl = $(e.currentTarget);
    toggleVisibility($targetEl.find("i"));
    $targetEl.siblings("#auth-dropdown").toggle(0);
  }

  render() {
    let currentUser = this.props.currentUser;

    if (currentUser) {
      const logoutUser = () => this.props.logout();

      return(
        <ul className="signedIn-menu">
          <li>
            <span className="clickable" onClick={this.toggleDropdown}>
              {currentUser.first_name}&nbsp;
              {currentUser.last_name} &nbsp;
              <i className="fa fa-chevron-down clickable" aria-hidden="true"></i>
            </span>
            <ul id="auth-dropdown" className="dropdown-menu">
              <li className="clickable" onClick={logoutUser}>Log out</li>
            </ul>
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="signedOut-menu">
          {this.renderModal()}
          <li><a href="#" onClick={this.openSignupModal}>Sign Up</a></li>
          <li><a href="#" onClick={this.openLoginModal}>Log In</a></li>
        </ul>
      )
    }
  }

}

export default UserMenu;
