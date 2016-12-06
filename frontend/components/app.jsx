import React from 'react';
import HeaderContainer from './header/header_container';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const loader = () => {
      if (this.props.loading) {
        return (
          <div className="loading-screen">
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
