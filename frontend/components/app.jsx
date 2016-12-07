import React from 'react';
import HeaderContainer from './header/header_container';

import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const loadClass = () => {
      let currentPath = this.props.location.pathname.split("/")[1];

      if ((currentPath === "campaigns" && !this.props.loading.campaign) ||
      (currentPath === "profile" && !this.props.loading.profile) ||
      (currentPath !== "profile" && currentPath !== "campaigns" && !this.props.loading.profile && !this.props.loading.campaign)) {
        // alert('loading');
        return "done-loading";
      }
    }

    const loader = () => {

      return (
        <div id="loading-screen" className={loadClass()}>
          <div className="loader-container">
          </div>
        </div>
      )
    };

    const children = this.props.children;

    return (
      <div>
        <div id="siteHeader-container">
          <HeaderContainer />
        </div>
        <div className="siteBody-container">
          {loader()}
          {children}
        </div>
      </div>
    );
  }

}

export default App;
