import React from 'react';
import HeaderContainer from './header/header_container';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.setState({
      loading: true
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.loading && !nextProps.loading) {
      this.setState({
        loading: false
      })
    }
  }

  render() {

    const loadingClass = () => {
      if (!this.state.loading) {
        return "done-loading";
      }
    }

    const loader = () => {

      if (this.props.loading) {
        return (
          <div id="loading-screen" className={loadingClass()}>
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
