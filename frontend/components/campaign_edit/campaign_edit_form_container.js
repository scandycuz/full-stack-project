import { connect } from 'react-redux';
import CampaignEditForm from './campaign_edit_form';

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
      let path = location.pathname.split("/").pop();
      return path;
    }
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignEditForm);
