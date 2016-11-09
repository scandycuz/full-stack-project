import React from 'react';
import { Router, Route, hashHistory, withRouter } from 'react-router';
import GoalProgress from '../campaign_show/goal_progress';

class CampaignIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.linkToCampaign = this.linkToCampaign.bind(this);
  }

  endDateToDuration(endDate) {
    if (endDate) {
      let endDateArray = endDate.split("-");
      let endDateFormatted = endDateArray[1]+","+endDateArray[2]+","+endDateArray[0];
      let timestamp = new Date(endDateFormatted).getTime();
      let durationLeft = timestamp - new Date();
      return Math.floor(durationLeft / (86400000));
    }
  }

  linkToCampaign(e) {
    e.preventDefault();
    let campaignId = this.props.campaign.id;
    this.props.router.push(`/campaigns/${campaignId}`);
  }

  render() {
    const campaignTitle = this.props.campaign.title;
    const campaignThumbnail = this.props.campaign.card_image_url;
    const campaignTagline = this.props.campaign.tagline;
    const goalAmount = this.props.campaign.goal_amount;
    const endDate = this.props.campaign.duration;
    const daysLeft = this.endDateToDuration(this.props.campaign.duration);
    let fundsReceived = 0;
    if (this.props.campaign.funds_received) {
      fundsReceived = this.props.campaign.funds_received;
    }

    return(
      <div className="campaign-index-item clickable" onClick={this.linkToCampaign}>
        <img src={campaignThumbnail}/>
        <div className="campaign-index-item-content">
          <div className="campaign-index-item-info">
            <h4>{campaignTitle}</h4>
            <p>{campaignTagline}</p>
          </div>
          <div className="campaign-index-item-goal-progress">
            <GoalProgress
              fundsReceived={fundsReceived}
              goalAmount={goalAmount}
              endDate={endDate}
              daysLeft={this.endDateToDuration(endDate)}
              componentType="index"/>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(CampaignIndexItem);
