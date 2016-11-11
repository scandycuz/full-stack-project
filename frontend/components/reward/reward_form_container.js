import { connect } from 'react-redux';

import { requestSingleReward } from '../../actions/reward_actions';

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
    }
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardForm);
