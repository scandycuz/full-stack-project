import { connect } from 'react-redux';
import CampaignEdit from './campaign_edit';

import { updateCampaign,
         requestSingleCampaign } from '../../actions/campaign_actions';
import { fetchingSingleCampaign } from '../../util/campaign_api_util';

const mapStateToProps = ({ campaign }) => ({
  campaign: campaign.campaign
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
)(CampaignEdit);
