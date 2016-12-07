import { connect } from 'react-redux';
import Profile from './profile';

import { requestSingleProfile } from '../../actions/profile_actions';

const mapStateToProps = ({ session, profile, loading }) => ({
  profile: profile.profile,
  campaigns: profile.profile.campaigns,
  currentUser: session.currentUser,
  loading: loading.profile
});

const mapDispatchToProps = (dispatch, { location }) => {

    return ({
      currentPath: () => {
        let path = location.pathname.split("/").pop();
        return (["campaigns", "contributions", "edit"].includes(path)) ? path : 'profile';
      },
      requestSingleProfile: id => dispatch(requestSingleProfile(id))
    })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
