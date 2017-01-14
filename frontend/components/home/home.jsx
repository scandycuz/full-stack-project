import React from 'react';
import { Router, Route, hashHistory, withRouter } from 'react-router';

import CampaignIndex from '../campaign_index/campaign_index';
import SimpleSlider from './simple_slider';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }

    this.loadingDelay = this.loadingDelay.bind(this);
  }

  loadingDelay() {
    setTimeout(() => {
      this.setState({loaded: true})
    }, 1000);
  }

  componentDidMount() {
    this.props.requestCampaigns();

    this.setState({loading: false}, this.loadingDelay)

    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    // if (Object.keys(this.props.campaigns).length === 0) {
    //   console.log(Object.keys(this.props.campaigns).length);
    //   this.props.requestCampaigns();
    // }
  }

  render() {

    const loadingScreen = () => {
      if (this.props.loading.campaigns || this.props.loading.featuredCampaigns || !this.state.loaded) {
        return (
          <div id="loading-screen" className="loading">
            <div className="loader-container">
              <div className="loader">
                <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                  <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
              </div>
            </div>
          </div>
        )
      }
    }

    return(
      <div className="home-content-full">
        {loadingScreen()}
        <div id="home-slider" className="home-slider">
          <SimpleSlider requestFeaturedCampaigns={this.props.requestFeaturedCampaigns}
                        featuredCampaigns={this.props.featuredCampaigns}
                        router={this.props.router}/>
        </div>
        <div className="home-content-container container">
          <div className="campaign-index-container">
            <ul className="campaign-index-tabs">
              <li><h3>Popular Pitches</h3></li>
            </ul>

            <CampaignIndex campaigns={this.props.campaigns}/>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Home);
