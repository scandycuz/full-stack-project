import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Campaign extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: this.props.currentPath()
    }

    this.getTabClass = this.getTabClass.bind(this);
    this.switchViewEdit = this.switchViewEdit.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      let currentUserId = this.props.currentUser.id;
      this.props.requestSingleProfile(currentUserId);
      this.props.requestUserCampaigns(currentUserId);
    }
  }

  getTabClass(tabName) {
    let currentPathArray = this.props.currentPathArray();
    currentPathArray = (currentPathArray.length === 3) ? ["view"] : currentPathArray;

    return (currentPathArray.includes(tabName)) ? "clickable selected" : "clickable";
  }

  switchViewEdit(e) {
    let tabName = e.currentTarget.textContent.split(" ")[1].toLowerCase();

    if (tabName === "edit") {
      this.props.router.push(`/campaigns/${this.props.params.id}/${tabName}/basics`);
    } else {
      this.props.router.push(`/campaigns/${this.props.params.id}`);
    }

    this.setState({ selectedTab: tabName});
  }

  tabList() {
    if (this.props.currentUserCampaigns) {
      let userCampaignIds = Object.keys(this.props.currentUserCampaigns);
      let currentCampaignId = String(this.props.currentCampaignId);

      if (userCampaignIds.includes(currentCampaignId)) {
        return(
          <ul>
            <li className={this.getTabClass('view')}
              onClick={this.switchViewEdit}>
              <i className="fa fa-eye"
                aria-hidden="true"></i> View Campaign</li>
            <li className={this.getTabClass('edit')}
              onClick={this.switchViewEdit}>
              <i className="fa fa-pencil-square-o"
                aria-hidden="true"></i> Edit Campaign</li>
          </ul>
        )
      }
    }
  }

  render() {

    const children = this.props.children;

    return(
      <div className="campaign">
        <div className="campaign-bar-container bar-container">
          <div className="campaign-bar container bar">
            {this.tabList()}
          </div>
        </div>
        <div className="campaign-content content group">
          {children}
        </div>
      </div>
    )
  }

}

export default withRouter(Campaign);
