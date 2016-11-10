import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

import GoalProgress from './goal_progress';
import Rewards from './rewards';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: "story",
      form: {
        donation_amount: 0
      }
    }

    this.tabClass = this.tabClass.bind(this);
    this.linkToProfile = this.linkToProfile.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleCampaign(this.props.params.id)
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

  tabClass(title) {
    if (title.toLowerCase() === this.state.selectedTab) {
      return "clickable selected";
    } else {
      return "clickable";
    }
  }

  linkToProfile(e) {
    e.preventDefault();
    let authorId = this.props.author.id;
    this.props.router.push(`/profile/${authorId}`);
  }

  render() {
    const children = this.props.children;

    const campaignTabs = [
      "Story"
    ]

    const startCheckout = (e) => {
      let target = e.target;
      let input = target.previousSibling;
      target.innerHTML = "Confirm";
      input.placeholder = "Enter an amount";
    }

    return(
      <div className="campaign-show">
        <div className="campaign-show-container container group">
          <div className="grid-7 alpha pitch-image-container">
            <img src={this.props.campaign.pitch_image_url}/>
          </div>
          <div className="grid-5 omega campaign-info">
            <h4>{this.props.campaign.title} by {this.props.author.first_name} {this.props.author.last_name}</h4>
            <p>{this.props.campaign.tagline}</p>
            <div onClick={this.linkToProfile} className="campaign-author-container clickable">
              <div className="author-image">
                <img src={this.props.author.small_photo_url} />
              </div>
              <div className="author-info">
                <p><strong>{this.props.author.first_name} {this.props.author.last_name}</strong></p>
                <p>{this.props.author.city}, {this.props.author.country}</p>
              </div>
            </div>

            <GoalProgress
              fundsReceived={this.props.campaign.funds_received}
              goalAmount={this.props.campaign.goal_amount}
              endDate={this.props.campaign.duration}
              daysLeft={this.endDateToDuration(this.props.campaign.duration)}
              endDateToDuration={(endDate) => this.endDateToDuration(endDate)}/>
            <div className="contribute-button-container">
              <input type="text" />
              <button className="clickable button" onClick={startCheckout}>Contribute</button>
            </div>
          </div>
          <div className="grid-7 campaign-content-main alpha">
            <div className="campaign-overview">
              <div className="campaign-header">
                <h4>Overview</h4>
              </div>
              <p>{this.props.campaign.campaign_overview}</p>
            </div>
            <div className="campaign-tabs-container">
              <ul className="campaign-tabs">
                {campaignTabs.map( (title, idx) => (
                  <li key={idx} className={this.tabClass(title)}><h4>{title}</h4></li>
                ))}
              </ul>
              <p>{this.props.campaign.campaign_pitch}</p>
            </div>
          </div>
          <div className="grid-4 campaign-content-sidebar alpha">
            <div className="campaign-header">
              <h4>Rewards</h4>
            </div>
            <Rewards rewards={this.props.rewards}/>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(CampaignShow);
