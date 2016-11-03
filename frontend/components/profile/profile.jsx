import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.currentPath);

    this.state = {
      selectedTab: this.props.currentPath
    }
    this.getTabClass = this.getTabClass.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  getCurrentTabName() {
    return $('.tabTitleList li.selected').innerHTML;
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

  render() {

    const profileTabs = [
      "Profile",
      "Campaigns",
      "Contributions"
    ]

    const children = this.props.children;

    return(
      <div className="profile">
        <div className="profile-bar-container">
          <div className="profile-bar">
            <ul>
              <li className="clickable"><i className="fa fa-eye" aria-hidden="true"></i> View Profile</li>
              <li className="clickable"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profile</li>
            </ul>
          </div>
        </div>
        <div className="profile-content">
          <h2>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
          <ul className="tabTitleList">
            {profileTabs.map( (tabName, idx) => (
              <li key={idx} className={this.getTabClass(tabName)} onClick={this.changeTab}>{tabName}</li>
            ))}
          </ul>
          <div className="profile-tab-content">
            {children}
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Profile);
