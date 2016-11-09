import { connect } from 'react-redux';
import Campaign from './campaign';

import { requestSingleCampaign } from '../../actions/campaign_actions';
import { requestUserCampaigns } from '../../actions/profile_actions';

const mapStateToProps = ({ campaign, profile, session }, ownState) => {

  return ({
    currentUser: session.currentUser,
    currentUserCampaigns: profile.profile.campaigns,
    currentCampaignId: campaign.campaign.id
  })
}

const mapDispatchToProps = (dispatch, { location }) => {

  return ({
    currentPath: () => {
      let path = location.pathname.split("/").pop();
      return (["edit"].includes(path)) ? path : 'view';
    },
    currentPathArray: () => {
      let pathArray = location.pathname.split("/");
      return pathArray;
    },
    requestSingleCampaign: id => dispatch(requestSingleCampaign(id)),
    requestUserCampaigns: user_id => dispatch(requestUserCampaigns(user_id))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campaign);
