import React from 'react';
import UserMenu from './user_menu';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.redirectHome = this.redirectHome.bind(this);
    this.linkToPitch = this.linkToPitch.bind(this);
  }

  componentDidMount() {
    this.props.requestUserCampaigns(this.props.currentUser.id);
  }

  redirectHome() {
    this.props.router.push("/");
  }

  linkToPitch(e) {
    e.preventDefault();
    this.props.router.push('/pitch-a-startup');
  }

  render() {

    return(
      <header className="siteHeader">
        <div className="siteHeader-content-left">
          <h1 className="siteLogo" onClick={this.redirectHome}>StartupGoGo</h1>
          <ul>
            <li><a className="clickable">Explore</a></li>
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
            router={this.props.router}/>
        </div>
      </header>
    )
  }

}

export default withRouter(Header);
