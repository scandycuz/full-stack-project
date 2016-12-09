import { connect } from 'react-redux';
import Home from './home';

import { requestCampaigns,
         requestFeaturedCampaigns } from '../../actions/campaign_actions';
import { fetchCampaigns,
         fetchFeaturedCampaigns } from '../../util/campaign_api_util';

const mapStateToProps = ({session, campaign, loading}) => ({
  currentUser: session.currentUser,
  campaigns: campaign.campaigns,
  loading: loading
});

const mapDispatchToProps = (dispatch, { location }) => ({
  requestCampaigns: () => dispatch(requestCampaigns()),
  requestFeaturedCampaigns: () => dispatch(requestFeaturedCampaigns())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
