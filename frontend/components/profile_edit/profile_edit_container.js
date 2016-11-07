import { connect } from 'react-redux';
import ProfileEdit from './profile_edit';
import { updateProfile,
         requestSingleProfile,
         uploadImage,
         receiveImage } from '../../actions/profile_actions';

const mapStateToProps = ({ profile, loading }, ownProps ) => {
  return ({
    profile: profile.profile,
    campaigns: profile.profile.campaigns,
    errors: profile.errors,
    loading: loading
  })
};

const mapDispatchToProps = (dispatch, { location }) => {

  return({
    updateProfile: profile => dispatch(updateProfile(profile)),
    requestSingleProfile: id => dispatch(requestSingleProfile(id)),
    uploadImage: () => dispatch(uploadImage()),
    receiveImage: () => dispatch(receiveImage())
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);
