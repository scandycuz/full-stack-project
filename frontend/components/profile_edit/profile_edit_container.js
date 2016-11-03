import { connect } from 'react-redux';
import ProfileEdit from './profile_edit';
import { updateProfile,
         updateProfileWithImage } from '../../actions/profile_actions';

const mapStateToProps = () => {
  return ({
    errors: []
  })
};

const mapDispatchToProps = (dispatch, { location }) => {

  return({
    updateProfileWithImage: profile => dispatch(updateProfileWithImage(profile)),
    updateProfile: profile => dispatch(updateProfile(profile))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);
