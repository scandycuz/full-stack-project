import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

import CampaignEditForm from './campaign_edit_form';

class CampaignEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: this.props.currentPath(),
      formState: {

      }
    }

    this.changeTab = this.changeTab.bind(this);
    this.tabClass = this.tabClass.bind(this);
    this.publishStatus = this.publishStatus.bind(this);
  }

  getChildContext() {
    return ({
      selectedTab: this.state.selectedTab,
      formState: this.state.formState
     });
  }

  changeTab(e) {
    let tabName = e.target.innerHTML.toLowerCase();

    if (!(tabName === "review &amp; launch")) {
      this.props.router.push(`/campaigns/${this.props.params.id}/edit/${tabName}`);
      this.setState({ selectedTab: tabName});
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
      "Review & Launch"
    ]

    return(
      <div className="campaign_edit">
        <div className="campaign-tab-content tab-content">
          <div className="campaign-header container">
            <h3>{campaign.title} <span className={this.publishStatus()}>{campaign.status}</span></h3>
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

CampaignEdit.childContextTypes = {
  selectedTab: React.PropTypes.string,
  formState: React.PropTypes.object
}

export default withRouter(CampaignEdit);
