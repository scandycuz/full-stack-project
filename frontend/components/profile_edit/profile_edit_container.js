import { connect } from 'react-redux';
import ProfileEdit from './profile_edit';
import { updateProfile, requestSingleProfile } from '../../actions/profile_actions';
import { fetchSingleProfile } from '../../util/profile_api_util';

const mapStateToProps = ({ profile }, ownProps ) => {
  return ({
    profile: profile.profile,
    errors: profile.errors
  })
};

const mapDispatchToProps = (dispatch, { location }) => {

  return({
    updateProfile: profile => dispatch(updateProfile(profile)),
    requestSingleProfile: id => dispatch(requestSingleProfile(id))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);
