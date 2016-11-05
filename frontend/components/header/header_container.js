import { connect } from 'react-redux';
import Header from './header';
import { signup, login, logout, receiveSessionErrors } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
 session,
 currentUser: session.currentUser,
 loggedIn: Boolean(session.currentUser),
 errors: session.errors
});

const mapDispatchToProps = dispatch => {

  return {
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors)),
    processForm: (type) => {
      const formType = (type === "login") ? login : signup;
      return (user) => {
        dispatch(formType(user))
      }
    },
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
