import React from 'react';
import HeaderContainer from './header/header_container';

import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
        <footer>

        </footer>
      </div>
    );
  }

}

export default App;
