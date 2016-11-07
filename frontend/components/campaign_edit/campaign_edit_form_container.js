import { connect } from 'react-redux';
import CampaignEditForm from './campaign_edit_form';

import { updateCampaign,
         requestSingleCampaign } from '../../actions/campaign_actions';
import { fetchingSingleCampaign } from '../../util/campaign_api_util';

const mapStateToProps = ({ session, campaign, loading }) => ({
  currentUser: session.currentUser,
  campaign: campaign.campaign,
  loading: loading
});

const mapDispatchToProps = (dispatch, { location }) => {

  return({
    updateCampaign: campaign => dispatch(updateCampaign(campaign)),
    requestSingleCampaign: id => dispatch(requestSingleCampaign(id)),
    currentPath: () => {
      return location.pathname.split("/").pop();
    }
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignEditForm);
