import { REQUEST_SINGLE_REWARD,
         receiveSingleReward,
         receiveRewardErrors,
         CREATE_REWARD,
         UPDATE_REWARD,
         DESTROY_REWARD,
         receiveRewardDelete } from "../actions/reward_actions";
import { fetchSingleReward,
         postSingleReward,
         patchSingleReward,
         deleteSingleReward } from "../util/reward_api_util.js";

const RewardMiddleware = ({ getState, dispatch }) => next => action => {
  const requestRewardSuccess = data => dispatch(receiveSingleReward(data));
  const deleteRewardSuccess = data => dispatch(receiveRewardDelete(data));
  const errorCallback = xhr => dispatch(receiveRewardErrors(xhr.responseJSON));
  const logSuccess = data => console.log(data);

  switch (action.type) {
    case REQUEST_SINGLE_REWARD:
      fetchSingleReward(action.id, requestRewardSuccess);
      return next(action);
    case CREATE_REWARD:
      postSingleReward(action.reward, requestRewardSuccess);
      return next(action);
    case UPDATE_REWARD:
      patchSingleReward(action.reward, requestRewardSuccess);
      return next(action);
    case DESTROY_REWARD:
      deleteSingleReward(action.id, deleteRewardSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default RewardMiddleware;
