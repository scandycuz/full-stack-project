import React from 'react';
import { Router, Route, hashHistory, withRouter } from 'react-router';

import CampaignIndexItem from './campaign_index_item';

class QueriedCampaignIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const campaigns = Object.keys(this.props.campaigns).map( (key) => (
      this.props.campaigns[key]
    ))

    if (campaigns) {
      return(
        <div className="campaign-index group">
          {campaigns.map( (campaign, idx) => (
            <CampaignIndexItem key={idx}
                               campaign={campaign}
                               handleImageLoaded={this.props.handleImageLoaded}/>
          ))}
        </div>
      )
    }
  }

}

export default withRouter(QueriedCampaignIndex);
