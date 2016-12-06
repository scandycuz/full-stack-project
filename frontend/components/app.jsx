import React from 'react';
import HeaderContainer from './header/header_container';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      loadCount: 1
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      this.setState({
        loadCount: this.state.loadCount + 1
      }, () => {
        if (this.state.loadCount >= 2) {
          this.setState({
            loading: false,
            loadCount: 0
          })
        }
      });
    }
  }

  render() {
    const loader = () => {
      if (this.state.loading) {
        return (
          <div className="loading-screen">
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
