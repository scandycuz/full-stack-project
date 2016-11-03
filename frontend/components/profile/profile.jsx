import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: this.props.currentPath()
    }
    this.getTabClass = this.getTabClass.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.renderTabList = this.renderTabList.bind(this);
    this.renderProfileTab = this.renderProfileTab.bind(this);
    this.switchViewEdit = this.switchViewEdit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.currentPath() !== this.state.selectedTab) {
      this.setState({selectedTab: this.props.currentPath() });
    }
  }

  getTabClass(tabName) {
    return (tabName === this.state.selectedTab) ? "clickable selected" : "clickable";
  }

  changeTab(e) {
    let tabName = e.target.innerHTML;
    if (tabName === "Profile") {
      this.props.router.push(`/profile/${this.props.params.id}`);
    } else {
      this.props.router.push(`/profile/${this.props.params.id}/${tabName}`);
    }
    this.setState({ selectedTab: tabName });
  }

  switchViewEdit(e) {
    let tabName = e.currentTarget.textContent.split(" ")[1];

    if (tabName === "Edit") {
      this.props.router.push(`/profile/${this.props.params.id}/Edit`);
    } else {
      this.props.router.push(`/profile/${this.props.params.id}`);
    }
  }

  renderTabList() {
    const profileTabs = [
      "Profile",
      "Campaigns",
      "Contributions"
    ]

    let currentPath = this.props.currentPath();

    if (currentPath !== "Edit") {
      return(
        <ul className="tabTitleList">
          {profileTabs.map( (tabName, idx) => (
            <li key={idx} className={this.getTabClass(tabName)} onClick={this.changeTab}>{tabName}</li>
          ))}
        </ul>
      )
    } else {
      return(
        <ul className="tabTitleList">
          <li className="clickable selected">Edit</li>
        </ul>
      )
    }
  }

  renderProfileTab() {
    let currentPath = this.props.currentPath();

    if (currentPath === "Profile") {
      return (
        <p>Image goes here</p>
      )
    }
  }

  render() {

    const children = this.props.children;

    return(
      <div className="profile">
        <div className="profile-bar-container">
          <div className="profile-bar">
            <ul>
              <li className={this.getTabClass('Profile')} onClick={this.switchViewEdit}><i className="fa fa-eye" aria-hidden="true"></i> View Profile</li>
              <li className={this.getTabClass('Edit')} onClick={this.switchViewEdit}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profile</li>
            </ul>
          </div>
        </div>
        <div className="profile-content">
          <h2>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
          {this.renderTabList()}
          <div className="profile-tab-content">
            {this.renderProfileTab()}
            {children}
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Profile);
