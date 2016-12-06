import React from 'react';
import HeaderContainer from './header/header_container';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const loader = () => {

      if (this.props.loading) {
        alert('loading');
        return (
          <div id="loading-screen">
            <div className="loader-container">
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
