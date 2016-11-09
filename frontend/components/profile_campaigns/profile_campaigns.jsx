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

    const editLink = () => {
      if (String(this.props.currentUserId) === this.props.params.id) {
        return (
          <div className="campaign-item-link clickable">Edit</div>
        )
      }
    }

    const goToUserCampainLink = (id) => {
      console.log(id);
      return( (e) => {
        this.props.router.push(`campaigns/${id}`);
      })
    }

    return(
      <ul className="user-campaign-show-list">
        {campaignsArray.map( (campaign) => (
          <li className="user-campaign-item" key={campaign.id}>
            <div onClick={goToUserCampainLink(campaign.id)} className="user-campaign-item-info clickable">
              <img src={campaign.card_image_url}/>
              <h4 className="clickable">{campaign.title}</h4>
            </div>
            {editLink()}
          </li>
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
