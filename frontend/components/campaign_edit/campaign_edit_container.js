import { connect } from 'react-redux';
import CampaignEdit from './campaign_edit';

import { updateCampaign,
         requestSingleCampaign} from '../../actions/campaign_actions';
import { requestUserCampaigns } from '../../actions/profile_actions';
import { fetchingSingleCampaign } from '../../util/campaign_api_util';

const mapStateToProps = ({ campaign, session, profile }) => ({
  campaign: campaign.campaign,

  currentUser: session.currentUser,
  currentUserCampaigns: profile.profile.campaigns,
  currentCampaignId: campaign.campaign.id
});

const mapDispatchToProps = (dispatch, { location }) => {

  return({
    updateCampaign: campaign => dispatch(updateCampaign(campaign)),
    requestSingleCampaign: id => dispatch(requestSingleCampaign(id)),
    currentPath: () => {
      return location.pathname.split("/").pop();
    },
    requestUserCampaigns: user_id => dispatch(requestUserCampaigns(user_id))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignEdit);
