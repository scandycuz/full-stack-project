import { connect } from 'react-redux';
import Profile from './profile';

import { requestSingleProfile } from '../../actions/profile_actions';

const mapStateToProps = ({ profile }) => ({
  profile: profile.profile
});

const mapDispatchToProps = (dispatch, { location }) => {

    return ({
      currentPath: () => {
        let path = location.pathname.split("/").pop();
        return (["Campaigns", "Contributions", "Edit"].includes(path)) ? path : 'Profile';
      },
      requestSingleProfile: id => dispatch(requestSingleProfile(id))
    })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
