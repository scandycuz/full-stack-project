import React from 'react';
import UserMenu from './user_menu';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.redirectHome = this.redirectHome.bind(this);
  }

  redirectHome() {
    this.props.router.push("/");
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
          <a href="#" className="siteHeader-button button">Pitch Your Startup</a>
          <UserMenu
            processForm={this.props.processForm}
            logout={this.props.logout}
            currentUser={this.props.currentUser}
            loggedIn={this.props.loggedIn}
            receiveSessionErrors={this.props.receiveSessionErrors}
            errors={this.props.errors} />
        </div>
      </header>
    )
  }

}

export default withRouter(Header);
