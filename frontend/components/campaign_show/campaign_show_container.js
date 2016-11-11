import { connect } from 'react-redux';
import CampaignShow from './campaign_show';

import { requestSingleCampaign } from '../../actions/campaign_actions';
import { createContribution } from '../../actions/contribution_actions';

const mapStateToProps = ({session, campaign, loading}) => ({
  campaign: campaign.campaign,
  currentUser: session.currentUser,
  author: campaign.campaign.author,
  rewards: campaign.campaign.rewards
});

const mapDispatchToProps = (dispatch, { location }) => {

    return ({
      requestSingleCampaign: (id) => dispatch(requestSingleCampaign(id)),
      createContribution: (contribution) => dispatch(createContribution(contribution))
    })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShow);
