import { connect } from 'react-redux';
import Home from './home';

import { requestCampaigns } from '../../actions/campaign_actions';
import { fetchCampaigns } from '../../util/campaign_api_util';

const mapStateToProps = ({session, campaign, loading}) => ({
  currentUser: session.currentUser,
  campaigns: campaign.campaigns,
  loading: loading
});

const mapDispatchToProps = (dispatch, { location }) => ({
  requestCampaigns: () => dispatch(requestCampaigns())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
