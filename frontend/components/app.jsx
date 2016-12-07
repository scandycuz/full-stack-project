import React from 'react';
import HeaderContainer from './header/header_container';

import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const children = this.props.children;

    return (
      <div>
        <div id="siteHeader-container">
          <HeaderContainer />
        </div>
        <div className="siteBody-container">
          {children}
        </div>
      </div>
    );
  }

}

export default App;
