import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = ({ session }) => ({
 session,
 loggedIn: Boolean(session.currentUser),
 errors: session.errors
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
