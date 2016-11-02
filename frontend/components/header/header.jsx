import React from 'react';
import UserMenu from './user_menu';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <header className="siteHeader">
        <div className="siteHeader-content-left">
          <h1>StartupGoGo</h1>
          <ul>
            <li><a href="#">Explore</a></li>
          </ul>
        </div>
        <div className="siteHeader-content-right">
          <a href="#" className="siteHeader-button button">Start A Campaign</a>
          <UserMenu
            processForm={this.props.processForm}
            logout={this.props.logout}
            currentUser={this.props.currentUser}
            loggedIn={this.props.loggedIn}
            errors={this.props.errors} />
        </div>
      </header>
    )
  }

}

export default Header;
