import { connect } from 'react-redux';
import Header from './header';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import { signup,
         login,
         logout,
         receiveSessionErrors } from '../../actions/session_actions';
import { requestUserCampaigns } from '../../actions/profile_actions';
import { requestSingleCampaign,
         requestCampaigns,
         requestCampaignsQuery } from '../../actions/campaign_actions';

const mapStateToProps = ({ session, profile, campaign }) => ({
 session,
 currentUser: session.currentUser,
 loggedIn: Boolean(session.currentUser),
 errors: session.errors,
 campaigns: session.campaigns,
 campaign: campaign.campaign,
 queriedCampaigns: campaign.queriedCampaigns
});

const mapDispatchToProps = (dispatch) => {

  return {
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors)),
    processForm: (type) => {
      const formType = (type === "login") ? login : signup;
      return (user) => {
        dispatch(formType(user))
      }
    },
    logout: () => dispatch(logout()),
    requestCampaigns: () => dispatch(requestCampaigns()),
    requestUserCampaigns: (user_id) => {
      return dispatch(requestUserCampaigns(user_id))
    },
    requestSingleCampaign: (id) => dispatch(requestSingleCampaign(id)),
    requestCampaignsQuery: (queryString) => dispatch(requestCampaignsQuery(queryString))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
