import { connect } from 'react-redux';
import ProfileContributions from './profile_contributions';

const mapStateToProps = ({session, profile}) => {
  return ({
    contributions: profile.profile.contributions,
    currentUser: session.currentUser
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
)(ProfileContributions);
