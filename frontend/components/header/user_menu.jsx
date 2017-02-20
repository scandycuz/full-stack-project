import React from 'react';
import Modal from 'react-modal';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: this.props.modalIsOpen,
      formType: this.props.formType,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      dropdownActive: this.props.mobileMenu
    }

    this.renderModal = this.renderModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.setFormToSignup = this.setFormToSignup.bind(this);
    this.setFormToLogin = this.setFormToLogin.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.handleRouterLink = this.handleRouterLink.bind(this);
    this.redirectIfLoggedOut = this.redirectIfLoggedOut.bind(this);
    this.userCampaignList = this.userCampaignList.bind(this);
    this.handleCampaignLink = this.handleCampaignLink.bind(this);
    this.pageClick = this.pageClick.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.pageClick, false);
    // this.redirectIfLoggedOut();
  }

  componentWillReceiveProps(nextProps) {
    // open login modal if Pitch a Startup clicked && logged out
    if (nextProps.modalIsOpen === true
    && nextProps.formType === "login"
    && nextProps.redirect) {
      return this.setState({modalIsOpen: true});
    }
  }

  componentDidUpdate() {
    if (this.props.loggedIn && this.state.modalIsOpen === true) {
      return this.setState({modalIsOpen: false});
    }

    // this.redirectIfLoggedOut();
  }

  pageClick(e) {
    if (this.state.dropdownActive && !this.props.mobileMenu) {
      let dropdown = document.getElementsByClassName("siteHeader-content-right")[0];
      let target = e.target;
      let pitchButton = document.getElementsByClassName("siteHeader-button")[0];
      let dropdownClicked = $.contains(dropdown, target);

      if (!dropdownClicked || target.className === pitchButton.className) {
        return this.setState({dropdownActive: false});
      }
    }
  }

  redirectIfLoggedOut() {
    if (!this.props.loggedIn) {
      this.props.router.replace('/');
    }
  }

  openSignupModal() {
    this.setFormToSignup();
    this.openModal();
  }

  openLoginModal() {
    this.setFormToLogin();
    this.openModal();
  }

  setFormToSignup() {
    this.props.receiveSessionErrors([]);
    this.setState({formType: "signup"});
  }

  setFormToLogin() {
    this.props.receiveSessionErrors([]);
    this.setState({formType: "login"});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    if (!this.props.currentUser) {
      this.props.resetRedirect();
    }
    return this.setState({modalIsOpen: false});
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
  }

  renderErrors () {
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
    const user = this.state;
    this.props.processForm(this.state.formType)({user});

    // Create Pitch Redirect
    if (this.props.redirect) {
      this.setState({modalIsOpen: false});
      let redirect = this.props.redirect;
      this.props.router.push(redirect);
      this.props.resetRedirect();
    }
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const demoUser = {
      user: {
        first_name: "Guest",
        last_name: "User",
        email: "guestuser@email.com",
        password: "password"
      }
    }
    this.props.processForm(this.state.formType)(demoUser);
    if (this.props.redirect) {
      this.setState({modalIsOpen: false});
      let redirect = this.props.redirect;
      this.props.router.push(redirect);
      this.props.resetRedirect();
    }
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
        <div className="button-container">
          <button className="button">{ buttonLabel }</button>
          <button className="button demo-login" onClick={this.handleDemoSubmit}>Guest Login</button>
        </div>
      </form>
    );

    if (this.state.formType === "login") {
      return(
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="User Auth" >

          <i className="fa fa-times modal-close clickable" aria-hidden="true" onClick={this.closeModal}></i>
          <p>Log in</p>
          {this.renderErrors()}
          {loginForm()}
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

            <i className="fa fa-times modal-close clickable" aria-hidden="true" onClick={this.closeModal}></i>
            <p>Sign up</p>
            {this.renderErrors()}
            {signupForm()}
            <p>
              Already have an account?&nbsp;
              <span className="clickable" onClick={this.setFormToLogin}>Login</span>
            </p>
        </Modal>
      );
    }
  }

  toggleDropdown(e) {
    e.preventDefault();
    let dropdownActive = !this.state.dropdownActive;
    this.setState({dropdownActive});
  }

  handleCampaignLink(campaignId) {
    return (e) => {
      e.preventDefault();
      this.props.requestSingleCampaign(campaignId);
      this.props.router.push(`/campaigns/${campaignId}/edit`);
    }
  }

  handleRouterLink(url) {
    return (e) => {
      e.preventDefault;
      this.props.router.push(url);
    }
  }

  userCampaignList() {
    const campaigns = this.props.campaigns;

    if (this.props.campaigns) {
      return (
        <ul className="user-campaign-list clickable">
          {Object.keys(campaigns).map( (key, idx) => {
            const campaign = campaigns[key];
            return (
              <li key={idx} onClick={this.handleCampaignLink(campaign.id)}>{campaign.title}</li>
            )
          })}
        </ul>
      )
    }
  }

  closeDropdown(e) {
    e.preventDefault();
    if (!this.props.mobileMenu) {
      this.setState({dropdownActive: false});
    }
  }

  render() {
    let currentUser = this.props.currentUser;
    const logoutUser = () => this.props.logout();

    const dropdownMenu = () => {
      if (this.state.dropdownActive) {
        return(
          <ul id="auth-dropdown" className="dropdown-menu" onClick={this.closeDropdown}>
            {this.userCampaignList()}
            <li className="clickable"
            onClick={this.handleRouterLink(`profile/${this.props.currentUser.id}`)}>
              My Profile
            </li>
            <li className="clickable" onClick={ logoutUser }>Log out</li>
          </ul>
        )
      }
    }

    const dropdownClass = (this.state.dropdownActive) ? "hidden" : "visible" ;
    if (currentUser) {

      return(
        <ul id="userMenu" className="signedIn-menu">
          <li className="dropdown-parent">
            <span className="menu-dropdown-button clickable" onClick={this.toggleDropdown}>
              {currentUser.first_name}&nbsp;
              {currentUser.last_name} &nbsp;
              <i className={`fa fa-chevron-down clickable ${dropdownClass}`} aria-hidden="true"></i>
            </span>
            {dropdownMenu()}
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="signedOut-menu">
          {this.renderModal()}
          <li className="clickable"><a onClick={this.openSignupModal}>Sign Up</a></li>
          <li className="clickable"><a onClick={this.openLoginModal}>Log In</a></li>
        </ul>
      )
    }
  }

}

export default withRouter(UserMenu);
