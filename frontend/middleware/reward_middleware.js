import { REQUEST_SINGLE_REWARD,
         receiveSingleReward,
         receiveRewardErrors } from "../actions/reward_actions";
import { fetchSingleReward } from "../util/reward_api_util.js";

const RewardMiddleware = ({ getState, dispatch }) => next => action => {
  const requestRewardSuccess = data => dispatch(receiveSingleReward(data));
  const errorCallback = xhr => dispatch(receiveRewardErrors(xhr.responseJSON));
  const logSuccess = data => console.log(data);

  switch (action.type) {
    case REQUEST_SINGLE_REWARD:
      fetchSingleReward(action.id, requestRewardSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default RewardMiddleware;
