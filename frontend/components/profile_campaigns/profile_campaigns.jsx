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

  campaignList() {
    let campaignsArray = [];
    const campaigns = this.props.campaigns;

    if (this.props.currentUser) {
      if (this.props.currentUser.id === this.props.profile.id) {
        Object.keys(campaigns).forEach( (key) => {
          campaignsArray.push(campaigns[key]);
        })
      } else {
        Object.keys(campaigns).forEach( (key) => {
          let campaign = campaigns[key];
          if (campaign.status === "published") {
            campaignsArray.push(campaign);
          }
        })
      }
    } else {
      Object.keys(campaigns).forEach( (key) => {
        let campaign = campaigns[key];
        if (campaign.status === "published") {
          campaignsArray.push(campaign);
        }
      })
    }


    const editLink = (campaignId) => {
      if (this.props.currentUser) {
        if (String(this.props.currentUser.id) === this.props.params.id) {
          return (
            <div onClick={goToUserEditCampaignLink(campaignId)} className="campaign-item-link clickable">Edit</div>
          )
        }
      }
    }

    const goToUserEditCampaignLink = (id) => {
      return( (e) => {
        this.props.router.push(`campaigns/${id}/edit`);
      })
    }

    const goToUserCampainLink = (id) => {
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
            {editLink(campaign.id)}
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
