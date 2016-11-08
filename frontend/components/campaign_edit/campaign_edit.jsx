import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

import CampaignEditForm from './campaign_edit_form';

class CampaignEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: this.props.currentPath()
    }

    this.changeTab = this.changeTab.bind(this);
    this.tabClass = this.tabClass.bind(this);
    this.reviewAndLaunch = this.reviewAndLaunch.bind(this);
  }

  reviewAndLaunch() {
    let campaign = this.props.campaign;
    // set campaign.status to published

    let campaignId = this.props.params.id;
    this.props.router.push(`/campaigns/${campaignId}`);
  }

  changeTab(e) {
    let tabName = e.target.innerHTML.toLowerCase();

    if (tabName === "review &amp; launch") {
      this.reviewAndLaunch();
    } else {
      this.props.router.push(`/campaigns/${this.props.params.id}/edit/${tabName}`);
      this.setState({ selectedTab: tabName});
    }
  }

  tabClass(step) {
    const stepName = step.toLowerCase();
    if (this.props.currentPath() === stepName) {
      return "selected clickable";
    } else {
      return "clickable";
    }
  }

  render() {

    const children = this.props.children;
    const campaign = this.props.campaign;

    const editSteps = [
      "Basics",
      "Story",
      "Review & Launch"
    ]

    return(
      <div className="campaign_edit">
        <div className="campaign-tab-content tab-content">
          <div className="campaign-header container">
            <h3>{campaign.title} <span className="campaign-status">{campaign.status}</span></h3>
          </div>
          <div className="campaign-steps container">
            <div className="campaign-steps-list">
              <ul>
                {editSteps.map( (step, idx) => (
                  <li key={idx} className={this.tabClass(step)} onClick={this.changeTab}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
          {children}
        </div>
      </div>
    )
  }

}

export default withRouter(CampaignEdit);
