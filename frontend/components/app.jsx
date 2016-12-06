import React from 'react';
import HeaderContainer from './header/header_container';

import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const loader = () => {

      let currentPath = this.props.location.pathname.split("/")[1];

      if ((currentPath === "campaigns" && this.props.loading.campaign) ||
      (currentPath === "profile" && this.props.loading.profile)) {
        return (
          <div id="loading-screen">
            <div className="loader-container">
              <div className="loader">
                <div className="square" ></div>
                <div className="square"></div>
                <div className="square last"></div>
                <div className="square clear"></div>
                <div className="square"></div>
                <div className="square last"></div>
                <div className="square clear"></div>
                <div className="square "></div>
                <div className="square last"></div>
              </div>
            </div>
          </div>
        )
      }
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
