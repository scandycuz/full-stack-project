import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = (dispatch, { location }) => {

    return ({
      currentPath: () => {
        let path = location.pathname.split("/").pop();
        return (["Campaigns", "Contributions", "Edit"].includes(path)) ? path : 'Profile';
      },
      
      receiveErrors: (errors) => dispatch(receiveErrors(errors)),
      logout: () => dispatch(logout())
    })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
