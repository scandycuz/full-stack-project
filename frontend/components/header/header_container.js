import { connect } from 'react-redux';
import Header from './header';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
 session,
 currentUser: session.currentUser,
 loggedIn: Boolean(session.currentUser),
 errors: session.errors
});

const mapDispatchToProps = dispatch => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === "login") ? login : signup;

  return {
    formType,
    processForm: user => dispatch(processForm(user)),
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
