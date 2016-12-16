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
          <div className="container group">
            <div>
              <h4 className="footer-title" onClick={() => this.props.router.push('/')}>GO</h4>
            </div>
            <div className="footer-list-container">
              <ul>
                <li onClick={() => this.props.router.push('/')}><a>Home</a></li>
                <li onClick={() => this.props.router.push('/search')}><a>Search</a></li>
              </ul>
            </div>
            <div className="footer-list-container">
              <ul>
                <li><a href="mailto:trevorscandalios@gmail.com" target="_top">Contact</a></li>
                <li><a href="https://www.linkedin.com/in/trevorscandalios" target="_blank">Careers</a></li>
              </ul>
            </div>
            <div className="footer-icons-container">
              <ul className="footer-icons">
                <li><a href="https://www.linkedin.com/in/trevorscandalios" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="https://github.com/scandycuz" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }

}

export default withRouter(App);
