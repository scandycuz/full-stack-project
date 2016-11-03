import { connect } from 'react-redux';
import ProfileEdit from './profile_edit';
import { updateProfile,
         UPDATE_PROFILE } from '../../actions/profile_actions';

const mapStateToProps = () => {
  return ({
    errors: []
  })
};

const mapDispatchToProps = (dispatch, { location }) => {
  let currentPathName = location.pathname.split("/").pop();
  let currentPath = (["Campaigns", "Contributions", "Edit"].includes(currentPathName)) ? currentPathName : 'Profile';

  return({
    currentPath: currentPath,
    updateProfile: profileInfo => dispatch(updateProfile(profileInfo))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);
