import React from 'react';
import UserMenu from './user_menu';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.redirectHome = this.redirectHome.bind(this);
    this.linkToPitch = this.linkToPitch.bind(this);
    this.setFormToLogin = this.setFormToLogin.bind(this);

    this.state = {
      modalIsOpen: false,
      formType: "login"
    }
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.requestUserCampaigns(this.props.currentUser.id);
    }
  }

  componentDidUpdate() {
    // if (this.props.currentUser && Object.keys(this.props.campaigns).length === 0) {
    //   this.props.requestUserCampaigns(this.props.currentUser.id);
    // }
  }

  redirectHome() {
    this.props.router.push("/");
  }

  setFormToLogin() {
    this.setState({formType: "login"});
  }

  linkToPitch(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.router.push('/pitch-a-startup');
    } else {
      this.setState({formType: "login", modalIsOpen: true}
    );

    }
  }

  render() {

    return(
      <header className="siteHeader">
        <div className="siteHeader-content-left">
          <h1 className="siteLogo" onClick={this.redirectHome}>StartupGoGo</h1>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="siteHeader-content-right">
          <a href="#" className="siteHeader-button button"
             onClick={this.linkToPitch}>Pitch A Startup</a>
          <UserMenu
            processForm={this.props.processForm}
            logout={this.props.logout}
            currentUser={this.props.currentUser}
            loggedIn={this.props.loggedIn}
            receiveSessionErrors={this.props.receiveSessionErrors}
            errors={this.props.errors}
            campaigns={this.props.campaigns}
            router={this.props.router}
            requestUserCampaigns={this.props.requestUserCampaigns}
            requestSingleCampaign={this.props.requestSingleCampaign}
            modalIsOpen={this.state.modalIsOpen}
            router={this.props.router}
            formType={this.state.formType}/>
        </div>
      </header>
    )
  }

}

export default withRouter(Header);
