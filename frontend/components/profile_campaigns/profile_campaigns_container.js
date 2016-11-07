import { connect } from 'react-redux';
import ProfileCampaigns from './profile_campaigns';

const mapStateToProps = ({ profile }) => {
  return ({
    campaigns: profile.profile.campaigns
  })
};

const mapDispatchToProps = (dispatch, { location }) => {
  let currentPathName = location.pathname.split("/").pop();
  let currentPath = (["Campaigns", "Contributions", "Edit"].includes(currentPathName)) ? currentPathName : 'Profile';

  return({
    currentPath: currentPath
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCampaigns);
