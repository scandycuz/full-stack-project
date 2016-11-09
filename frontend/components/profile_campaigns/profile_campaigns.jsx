import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class ProfileCampaigns extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPath: this.props.currentPath
    }

    this.campaignList = this.campaignList.bind(this);
  }

  // componentDidMount() {
  //   this.props.requestUserCampaigns(this.props.params.id);
  // }

  campaignList() {
    let campaignsArray = [];
    const campaigns = this.props.campaigns;
    Object.keys(campaigns).forEach( (key) => {
      campaignsArray.push(campaigns[key]);
    })

    return(
      <ul>
        {campaignsArray.map( (campaign, idx) => (
          <li key={idx}>{campaign.title}</li>
        ))}
      </ul>
    )
  }

  render() {

    return(
      <div>
        <h3>Campaigns</h3>
        {this.campaignList()}
      </div>
    )
  }

}

export default withRouter(ProfileCampaigns);
