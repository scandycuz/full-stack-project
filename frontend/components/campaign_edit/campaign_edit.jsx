import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import merge from 'lodash/merge';

import CampaignEditForm from './campaign_edit_form';

class CampaignEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: this.props.currentPath(),
      formState: this.props.campaign
    }

    this.changeTab = this.changeTab.bind(this);
    this.tabClass = this.tabClass.bind(this);
    this.publishStatus = this.publishStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    let campaignId = this.props.params.id;
    this.props.requestSingleCampaign(campaignId);
  }

  componentWillReceiveProps(nextProps) {
    const checkUserCampaign = () => {

      if (this.props.campaign.title !== nextProps.campaign.title && nextProps.currentUserCampaigns) {
        let campaignId = this.props.params.id;
        let currentUserCampaignKeys = Object.keys(nextProps.currentUserCampaigns);
        if (!currentUserCampaignKeys.includes(campaignId)) {
          this.props.router.replace(`/campaigns/${campaignId}`);
        }
      }
    }

    if (nextProps.campaign) {
      this.setState({ formState: nextProps.campaign }, checkUserCampaign);
    }
  }

  componentDidUpdate() {
    let campaignId = this.props.params.id;
    if (!this.props.currentUser) {
      this.props.router.replace(`/campaigns/${campaignId}`);
    }
  }

  getChildContext() {
    return ({
      selectedTab: this.state.selectedTab,
      formState: this.state.formState,
      handleSubmit: (campaign) => this.handleSubmit(campaign),
      handleSave: (campaign, currentPath) => this.handleSave(campaign, currentPath),
      updateParentState: (campaign) => this.setState({formState: campaign})
     });
  }

  handleSubmit(campaign) {
    campaign = merge({}, campaign, {status: "published"});
    this.props.updateCampaign({campaign});

    let campaignId = this.props.params.id;
    this.props.router.push(`/campaigns/${campaignId}`);
  }

  handleSave(campaign, currentPath) {
    this.saveCampaign(campaign);

    let campaignId = this.props.params.id;
    switch(currentPath) {
      case "basics":
        return this.props.router.push(`/campaigns/${campaignId}/edit/story`);
      case "story":
        return this.props.router.push(`/campaigns/${campaignId}/edit/rewards`);
    }
  }

  saveCampaign(campaign) {
    this.props.updateCampaign({campaign});
  }

  changeTab(e) {
    e.preventDefault();
    let tabName = e.target.innerHTML.toLowerCase();

    if (tabName === "review &amp; launch" || tabName === "update campaign") {
      this.handleSubmit(this.state.formState);
    } else {
      this.props.router.push(`/campaigns/${this.props.params.id}/edit/${tabName}`);
      this.setState({ selectedTab: tabName });
    }
  }

  tabClass(step) {
    const stepName = step.toLowerCase();
    let className;

    if (this.props.currentPath() === stepName) {
      className = "selected clickable";
    } else {
      className = "clickable";
    }
    if (stepName === "rewards" && (this.props.currentPath() === "edit" || this.props.currentPath() === "new")) {
      className = "selected clickable";
    }
    if (stepName === "review & launch") {
      className = `${className} review-button`;
    }

    return className;
  }

  publishStatus() {
    let status = this.props.campaign.status;
    if (status === "draft") {
      return "campaign-status";
    } else {
      return "campaign-status status-published";
    }
  }

  render() {

    const children = this.props.children;
    const campaign = this.props.campaign;

    const editSteps = [
      "Basics",
      "Story",
      "Rewards",
      "Review & Launch"
    ]

    const lastStep = () => {
      if (this.state.formState.status === "published") {
        return "Update Campaign";
      } else {
        return "Review & Launch";
      }
    }

    const loadClass = () => {
      if (this.props.loading) {
        return "loading";
      } else {
        return "";
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
      <div className="campaign_edit">
        <div className="campaign-tab-content tab-content">
          {loader()}
          <div className="campaign-header container">
            <h3>{campaign.title} <span className={this.publishStatus()}>{campaign.status}</span></h3>
          </div>
          <div className="campaign-steps container">
            <div className="campaign-steps-list">
              <ul>
                {editSteps.map( (step, idx) =>  {
                  if (idx === editSteps.length - 1) {
                    return (
                      <li key={idx} className={this.tabClass(step)} onClick={this.changeTab}>{lastStep()}</li>
                    )
                  } else {
                    return (
                      <li key={idx} className={this.tabClass(step)} onClick={this.changeTab}>{step}</li>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
          {children}
        </div>
      </div>
    )
  }

}

CampaignEdit.childContextTypes = {
  selectedTab: React.PropTypes.string,
  formState: React.PropTypes.object,
  handleSubmit: React.PropTypes.func,
  handleSave: React.PropTypes.func,
  updateParentState: React.PropTypes.func
}

export default withRouter(CampaignEdit);
