import { connect } from 'react-redux';
import ProfileEdit from './profile_edit';
import { updateProfile,
         requestSingleProfile,
         uploadImage,
         receivedImage } from '../../actions/profile_actions';
import { fetchingleProfile } from '../../util/profile_api_util';

const mapStateToProps = ({ profile, loading }, ownProps ) => {
  return ({
    profile: profile.profile,
    errors: profile.errors,
    loading: loading
  })
};

const mapDispatchToProps = (dispatch, { location }) => {

  return({
    updateProfile: profile => dispatch(updateProfile(profile)),
    requestSingleProfile: id => dispatch(requestSingleProfile(id)),
    uploadImage: () => dispatch(uploadImage()),
    receivedImage: () => dispatch(receivedImage())
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);
