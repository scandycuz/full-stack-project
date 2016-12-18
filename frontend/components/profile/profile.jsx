import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: this.props.currentPath(),
      profilePhotoUrl: null,
      imageLoaded: null
    }
    this.tabClass = this.tabClass.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.renderTabList = this.renderTabList.bind(this);
    this.renderProfileTab = this.renderProfileTab.bind(this);
    this.switchViewEdit = this.switchViewEdit.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  componentDidMount() {
    this.setState({
      profilePhotoUrl: null,
      imageLoaded: false
    });

    // set imageloaded to true if no image
    if (this.props.profile) {
      if (this.props.profile.photo_url === "") {
        this.setState({imageLoaded: true});
      }
    }

    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    if (this.props.currentPath() !== this.state.selectedTab) {
      this.setState({selectedTab: this.props.currentPath() });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.profilePhotoUrl !== nextProps.profile.photo_url) {
      this.setState({profilePhotoUrl: nextProps.profile.photo_url});
    }

    if (this.props.currentUser !== nextProps.currentUser) {
      this.props.requestSingleProfile(nextProps.params.id);
      // reset image if requesting new profile
      this.setState({
        profilePhotoUrl: null
      });
    }

    if (nextProps.profile) {
      if (nextProps.profile.photo_url === "") {
        this.setState({imageLoaded: true});
      }
    }

    // set imageloaded to true if no image
    if (nextProps.profile) {
      if (nextProps.profile.photo_url === "") {
        this.setState({imageLoaded: true});
      }
    }
  }

  handleImageLoaded() {
    this.setState({ imageLoaded: true });
  }

  tabClass(tabName) {
    let currentTabName = tabName.toLowerCase();
    if (currentTabName === "view") {
      return (["profile", "campaigns", "contributions"].includes(this.state.selectedTab)) ? "clickable selected" : "clickable";
    } else {
      return (currentTabName === this.state.selectedTab) ? "clickable selected" : "clickable";
    }
  }

  changeTab(e) {
    let tabName = e.target.innerHTML.toLowerCase();

    if (tabName === "profile") {
      this.props.router.push(`/profile/${this.props.params.id}`);
    } else {
      this.props.router.push(`/profile/${this.props.params.id}/${tabName}`);
    }

    this.setState({ selectedTab: tabName });
  }

  switchViewEdit(e) {
    let tabName = e.currentTarget.textContent.split(" ")[1].toLowerCase();

    if (tabName === "edit") {
      this.props.router.push(`/profile/${this.props.params.id}/edit`);
    } else {
      this.props.router.push(`/profile/${this.props.params.id}`);
    }
  }

  renderTabList(view) {
    let profileTabs;

    if (view === 'view-only') {
      profileTabs = [
        "Profile",
        "Campaigns"
      ]
    } else {
      profileTabs = [
        "Profile",
        "Campaigns",
        "Contributions"
      ]
    }

    let currentPath = this.props.currentPath();

    if (currentPath !== "edit") {
      return(
        <ul className="tabTitleList">
          {profileTabs.map( (tabName, idx) => (
            <li key={idx}
              className={this.tabClass(tabName)}
              onClick={this.changeTab}>{tabName}</li>
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

    if (currentPath === "profile") {
      let small_photo_url = this.props.profile.small_photo_url;
      let photo_url = this.state.profilePhotoUrl;
      let description = this.props.profile.description;
      let about = this.props.profile.about;

      const campaignNum = () => {
        if (this.props.campaigns !== {}) {
          return (
            Object.keys(this.props.campaigns).length
          )
        }
      }

      const contributionNum = () => {
        if (this.props.profile.contributions !== {}) {
          return (
            Object.keys(this.props.profile.contributions).length
          )
        }
      }

      return (
        <div id="profile-content" className="group">
          <div className="grid-5 alpha">
            <img src={photo_url} onLoad={this.handleImageLoaded}/>
          </div>
          <div className="profile-info grid-7 omega">
            <ul className="profile-statistics">
              <li><span className="stat-num">{campaignNum()}</span> Campaigns</li>
              <li><span className="stat-num">{contributionNum()}</span> Contributions</li>
            </ul>
            <h3>{description}</h3>
            <p>{about}</p>
          </div>
        </div>
      )
    }
  }

  render() {

    const children = this.props.children;
    const profile = this.props.profile;
    const profileId = this.props.params.id;
    const currentUser = this.props.currentUser;

    const loadClass = () => {
      if (this.props.loading || !this.state.imageLoaded) {
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

    if (currentUser) {
      if (String(currentUser.id) === String(profileId)) {
        return (
          <div className="profile">
            {loader()}
            <div className="profile-bar-container bar-container">
              <div className="profile-bar container bar">
                <ul>
                  <li className={this.tabClass('view')} onClick={this.switchViewEdit}><i className="fa fa-eye" aria-hidden="true"></i> View Profile</li>
                  <li className={this.tabClass('edit')} onClick={this.switchViewEdit}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profile</li>
                </ul>
              </div>
            </div>
            <div className="profile-content content container">
              <h2>{this.props.profile.first_name} {this.props.profile.last_name}</h2>
              {this.renderTabList()}
              <div className="profile-tab-content tab-content">
                {this.renderProfileTab()}
                {children}
              </div>
            </div>
          </div>
        )
      } else {
        // Not logged in user's profile
        return(
          <div className="profile">
            {loader()}
            <div className="profile-content content container">
              <h2>{this.props.profile.first_name} {this.props.profile.last_name}</h2>
              {this.renderTabList('view-only')}
              <div className="profile-tab-content tab-content">
                {this.renderProfileTab()}
                {children}
              </div>
            </div>
          </div>
        )
      }
      // No current user
    } else {
      return(
        <div className="profile">
          {loader()}
          <div className="profile-content content container">
            <h2>{this.props.profile.first_name} {this.props.profile.last_name}</h2>
            {this.renderTabList('view-only')}
            <div className="profile-tab-content tab-content">
              {this.renderProfileTab()}
              {children}
            </div>
          </div>
        </div>
      )
    }

  }

}

export default withRouter(Profile);
