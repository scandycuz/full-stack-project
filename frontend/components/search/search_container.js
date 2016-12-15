import { connect } from 'react-redux';
import Search from './search';

import { requestCampaignsQuery } from '../../actions/campaign_actions';

const mapStateToProps = ({ session, campaign, loading }) => ({
  currentUser: session.currentUser,
  queryString: campaign.queryString,
  queriedCampaigns: campaign.queriedCampaigns,
  loading: loading
});

const mapDispatchToProps = (dispatch) => {
  return({
    requestCampaignsQuery: (queryString) => dispatch(requestCampaignsQuery(queryString))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
