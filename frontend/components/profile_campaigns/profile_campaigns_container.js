import { connect } from 'react-redux';
import { requestUserCampaigns } from "../../actions/profile_actions";
import ProfileCampaigns from './profile_campaigns';

const mapStateToProps = ({ profile, session }) => {
  return ({
    profile: profile.profile,
    campaigns: profile.profile.campaigns,
    currentUser: session.currentUser
  })
};

const mapDispatchToProps = (dispatch, { location }) => {
  let currentPathName = location.pathname.split("/").pop();
  let currentPath = (["Campaigns", "Contributions", "Edit"].includes(currentPathName)) ? currentPathName : 'Profile';

  return({
    currentPath: currentPath,
    requestUserCampaigns: (user_id) => requestUserCampaigns(user_id)
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCampaigns);
