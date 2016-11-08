import { connect } from 'react-redux';
import CampaignShow from './campaign_show';

import { requestSingleCampaign } from '../../actions/campaign_actions';

const mapStateToProps = ({session, campaign, loading}) => ({
  campaign: campaign.campaign,
  currentUser: session.currentUser,
  author: campaign.campaign.author
});

const mapDispatchToProps = (dispatch, { location }) => {

    return ({
      requestSingleCampaign: (id) => dispatch(requestSingleCampaign(id))
    })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShow);
