import { connect } from 'react-redux';

import { requestSingleReward,
         updateReward,
         createReward,
         destroyReward } from '../../actions/reward_actions';
import { requestSingleCampaign } from '../../actions/campaign_actions';

import RewardForm from './reward_form';

const mapStateToProps = ({ campaign, session, profile, reward }) => ({
  campaign: campaign.campaign,
  reward: reward.reward,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, { location }) => {

  return({
    requestSingleReward: id => dispatch(requestSingleReward(id)),
    currentPath: () => {
      return location.pathname.split("/").pop();
    },
    updateReward: (reward) => dispatch(updateReward(reward)),
    createReward: (reward) => dispatch(createReward(reward)),
    destroyReward: (id) => dispatch(destroyReward(id))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardForm);
