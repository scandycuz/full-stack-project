import { connect } from 'react-redux';
import CampaignPitch from './campaign_pitch';

import { createCampaign } from '../../actions/campaign_actions';
import { requestUserCampaigns } from '../../actions/profile_actions';
import { postCampaign } from '../../util/campaign_api_util';

const mapStateToProps = ({ session, campaign }) => ({
  currentUser: session.currentUser,
  campaign: campaign.campaign
});

const mapDispatchToProps = (dispatch, { location }) => {

  return({
    createCampaign: campaign => dispatch(createCampaign(campaign)),
    requestUserCampaigns: userId => dispatch(requestUserCampaigns(userId))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignPitch);
