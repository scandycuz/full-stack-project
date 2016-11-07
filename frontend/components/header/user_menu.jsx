import React from 'react';
import Modal from 'react-modal';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

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
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.handleRouterLink = this.handleRouterLink.bind(this);
    this.redirectIfLoggedOut = this.redirectIfLoggedOut.bind(this);
    this.userCampaignList = this.userCampaignList.bind(this);
    this.userCampaignList = this.userCampaignList.bind(this);
    this.linkToCampaign = this.linkToCampaign.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", (e) => {
      if (e.target.tagName != "SPAN" && e.target.tagName != "I") {
        $('#auth-dropdown').hide();
        $('.dropdown-parent i').css('visibility', 'visible');
      }
    })

    this.redirectIfLoggedOut();
  }

  componentDidUpdate() {
    if (this.props.loggedIn && this.state.modalIsOpen === true) {
      return this.closeModal();
    }
    this.redirectIfLoggedOut();
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
    this.setFormToLogin()
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
    this.setState({modalIsOpen: false});
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
    return this.props.processForm(this.state.formType)({user});
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
    return this.props.processForm(this.state.formType)(demoUser);
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

  toggleVisibility($el) {
    let	visibility = $el.css('visibility');
    if (visibility === 'visible') {
      return $el.css('visibility', 'hidden');
    } else {
      return $el.css('visibility', 'visible');
    }
  }

  toggleDropdown(e) {
    let $targetEl = $(e.currentTarget);
    this.toggleVisibility($targetEl.find("i"));
    $targetEl.siblings("#auth-dropdown").toggle(0);
  }

  handleRouterLink(url) {
    return (e) => {
      e.preventDefault;
      this.props.router.push(url);
    }
  }

  linkToCampaign(e) {
    e.preventDefault();
    const campaignId = e.currentTarget.dataset.id;
    this.props.router.push(`/campaigns/${campaignId}/edit/basics`);
  }

  userCampaignList() {
    const campaigns = this.props.campaigns;
    return (
      <ul className="user-campaign-list clickable">
        {Object.keys(campaigns).map( (key, idx) => {
          const campaign = campaigns[key];
          return (
            <li key={idx} onClick={this.linkToCampaign} data-id={campaign.id}>{campaign.title}</li>
          )
        })}
      </ul>
    )
  }

  render() {
    let currentUser = this.props.currentUser;

    if (currentUser) {
      const logoutUser = () => this.props.logout();

      return(
        <ul className="signedIn-menu">
          <li className="dropdown-parent">
            <span className="clickable" onClick={this.toggleDropdown}>
              {currentUser.first_name}&nbsp;
              {currentUser.last_name} &nbsp;
              <i className="fa fa-chevron-down clickable" aria-hidden="true"></i>
            </span>
            <ul id="auth-dropdown" className="dropdown-menu">
              {this.userCampaignList()}
              <li className="clickable" onClick={this.handleRouterLink(`profile/${this.props.currentUser.id}`)}>My Profile</li>
              <li className="clickable" onClick={ logoutUser }>Log out</li>
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

export default withRouter(UserMenu);
