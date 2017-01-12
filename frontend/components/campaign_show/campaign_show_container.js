import { connect } from 'react-redux';
import CampaignShow from './campaign_show';

import { requestSingleCampaign,
         updateCampaign } from '../../actions/campaign_actions';
import { createContribution } from '../../actions/contribution_actions';

const mapStateToProps = ({session, campaign, loading}) => ({
  campaign: campaign.campaign,
  errors: campaign.errors,
  currentUser: session.currentUser,
  author: campaign.campaign.author,
  rewards: campaign.campaign.rewards,
  loading: loading.campaign
});

const mapDispatchToProps = (dispatch, { location }) => {

    return ({
      requestSingleCampaign: (id) => dispatch(requestSingleCampaign(id)),
      updateCampaign: (campaign) => dispatch(updateCampaign(campaign)),
      createContribution: (contribution) => dispatch(createContribution(contribution)),
      currentPath: () => {
        return location.pathname.split("/").pop();
      }
    })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShow);
