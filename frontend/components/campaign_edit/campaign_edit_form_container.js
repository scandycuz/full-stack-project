import { connect } from 'react-redux';
import CampaignEditForm from './campaign_edit_form';

import { updateCampaign,
         requestSingleCampaign,
         uploadImage,
         receiveImage } from '../../actions/campaign_actions';
import { fetchingSingleCampaign } from '../../util/campaign_api_util';

const mapStateToProps = ({ session, campaign, reward, loading }) => ({
  currentUser: session.currentUser,
  campaign: campaign.campaign,
  loading: loading,
  rewards: campaign.campaign.rewards,
  reward: reward.reward
});

const mapDispatchToProps = (dispatch, { location }) => {

  return({
    updateCampaign: campaign => dispatch(updateCampaign(campaign)),
    requestSingleCampaign: id => dispatch(requestSingleCampaign(id)),
    location: location.pathname,
    currentPath: () => {
      return location.pathname.split("/").pop();
    },
    uploadImage: () => dispatch(uploadImage()),
    receiveImage: () => dispatch(receiveImage())
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignEditForm);
