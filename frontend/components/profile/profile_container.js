import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = (dispatch, { location }) => {
    let currentPathName = location.pathname.split("/").pop();
    let currentPath = (["Campaigns", "Contributions"].includes(currentPathName)) ? currentPathName : 'Profile';

    return ({
      currentPath: currentPath,
      receiveErrors: (errors) => dispatch(receiveErrors(errors)),
      logout: () => dispatch(logout())
    })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
