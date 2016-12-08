import React from 'react';
import CampaignIndex from '../campaign_index/campaign_index';
import SimpleSlider from './simple_slider';

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestCampaigns();
  }

  componentDidUpdate() {
    if (Object.keys(this.props.campaigns).length === 0) {
      this.props.requestCampaigns();
    }
  }

  render() {

    return(
      <div className="home-content-full">
        <div id="home-slider" className="home-slider">
          <SimpleSlider/>
        </div>
        <div className="home-content-container container">
          <div className="campaign-index-container">
            <ul className="campaign-index-tabs">
              <li><h3>Recent Pitches</h3></li>
            </ul>

            <CampaignIndex campaigns={this.props.campaigns}/>
          </div>
        </div>
      </div>
    )
  }

}

export default Home;
