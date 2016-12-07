import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

import GoalProgress from './goal_progress';
import Rewards from './rewards';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: "story",
      contribution: {
        user_id: null,
        campaign_id: null,
        reward_id: null,
        amount: ""
      },
      buttonText: "Contribute",
      campaignPitchImageUrl: null,
      imageLoaded: null
    }

    this.tabClass = this.tabClass.bind(this);
    this.linkToProfile = this.linkToProfile.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  componentDidMount() {
    this.setState({
      campaignPitchImageUrl: null,
      imageLoaded: null
    });

    window.scrollTo(0, 0);

    if (this.props.currentUser) {
      let contribution = Object.assign({},
                                       this.state.contribution,
                                       {user_id: this.props.currentUser.id},
                                       {campaign_id: parseInt(this.props.params.id)});
      let newState = Object.assign({}, this.state, {contribution});
      this.setState(newState);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.campaign.funds_received !== nextProps.campaign.funds_received) {
      this.props.requestSingleCampaign(this.props.params.id);

      if (this.props.currentUser) {
        let contribution = Object.assign({},
          this.state.contribution,
          {user_id: this.props.currentUser.id},
          {campaign_id: parseInt(this.props.params.id)});
          let newState = Object.assign({}, this.state, {buttonText: "Contribute", contribution});
          this.setState(newState);
      }
    }
    if (this.state.campaignPitchImageUrl !== nextProps.campaign.pitch_image_url) {
      this.setState({campaignPitchImageUrl: nextProps.campaign.pitch_image_url});
    }
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
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

  changeTab(title) {

    return (e) => {
      title = title.toLowerCase();
      this.setState({selectedTab: title});
      let id = this.props.params.id;
      if (title === "story") {
        this.props.router.push(`/campaigns/${id}`);
      } else {
        this.props.router.push(`/campaigns/${id}/${title}`);
      }
    }
  }

  linkToProfile(e) {
    e.preventDefault();
    let authorId = this.props.author.id;
    this.props.router.push(`/profile/${authorId}`);
  }

  update(property) {
    return (e) => {
      let targetVal = parseInt(e.target.value);
      let contribution = Object.assign({},
                                       this.state.contribution,
                                       {amount: targetVal});
      let newState = Object.assign({}, this.state, {contribution});
      this.setState(newState);
    }
  }

  render() {
    const children = this.props.children;

    const campaignTabs = [
      "Story",
      "Backers"
    ]

    const _nullContribution = {
      user_id: null,
      campaign_id: null,
      reward_id: null,
      amount: ""
    }

    const startCheckout = (e) => {
      // temporary:
      if (!this.props.currentUser) {
        alert('Please log in or Sign Up to Contribute.');
        return this.props.router.push('/');
      }

      let target = e.target;
      let input = target.previousSibling;
      this.setState({buttonText: "Confirm"})
      target.addEventListener("click", confirmCheckout);
      $(target).closest('.contribute-button-container').mouseleave(
        () => {
          this.setState({buttonText: "Contribute"});
          target.removeEventListener("click", confirmCheckout);
        }
      );

    }

    const confirmCheckout = (e) => {
      e.preventDefault();
      let target = e.target;
      target.removeEventListener("click", confirmCheckout);

      let contribution = this.state.contribution;
      let amount = this.props.campaign.funds_received + this.state.contribution.amount;
      let campaign = Object.assign({}, this.props.campaign, {funds_received: amount});
      this.props.createContribution({contribution});
      this.props.updateCampaign(campaign);
      this.setState({contribution: _nullContribution});
    }

    const linkToProfile = (id) => {
      return (e) => {
        this.props.router.push(`/profile/${id}`);
      }
    }

    const tabContent = () => {
      let selectedTab = this.state.selectedTab;

      if (selectedTab === 'story') {
        return (
          <p>{this.props.campaign.campaign_pitch}</p>
        )
      } else if (selectedTab === 'backers') {
        return (
          <ul className="backers-list">
            {backers()}
          </ul>
        )
      }
    }

    const backers = () => {

      if (this.props.campaign) {
        if (this.props.campaign.contributors) {
          let backers = this.props.campaign.contributors;
          let backersKeys = Object.keys(backers).map( id => parseInt(id));
            return (
              backersKeys.map( (id) => (
                <li key={id} className="clickable" onClick={linkToProfile(id)}>
                  <img src={backers[id].small_photo_url}/>
                  <div className="backer-info">
                    <span>{backers[id].first_name} {backers[id].last_name}</span>
                    <span>{backers[id].city}, {backers[id].country}</span>
                  </div>
                </li>
              ))
            )
        }
      }
    }

    const loadClass = () => {
      if (this.props.loading && !this.state.imageLoaded) {
        return "loading";
      }
    }

    const loader = () => {

      return (
        <div id="loading-screen" className={loadClass()}>
          <div className="loader-container">
            <div className="loader">
              <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
              </svg>
            </div>
          </div>
        </div>
      )
    };

    return(
      <div className="campaign-show">
        {loader()}
        <div className="campaign-show-container container group">
          <div className="grid-7 alpha pitch-image-container">
            <img
              src={this.state.campaignPitchImageUrl}
              onLoad={this.handleImageLoaded}/>
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
              <span className="contribute-button-box">
                $&nbsp;<input type="text"
                value={(isNaN(this.state.contribution.amount)) ? "" : this.state.contribution.amount}
                onChange={this.update('amount')}/>
              </span>
              <button className="clickable button" onClick={startCheckout}>{this.state.buttonText}</button>
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
                  <li key={idx} className={this.tabClass(title)} onClick={this.changeTab(title)}><h4>{title}</h4></li>
                ))}
              </ul>
              {tabContent()}
            </div>
          </div>
          <div className="grid-4 campaign-content-sidebar alpha">
            <div className="campaign-header">
              <h4>Rewards</h4>
            </div>
            <Rewards
              rewards={this.props.rewards}
              contribution={this.state.contribution}
              campaign={this.props.campaign}
              createContribution={this.props.createContribution}
              currentUser={this.props.currentUser}
              updateCampaign={this.props.updateCampaign}/>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(CampaignShow);
