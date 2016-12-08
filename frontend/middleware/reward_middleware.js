import { REQUEST_SINGLE_REWARD,
         receiveSingleReward,
         receiveRewardErrors,
         CREATE_REWARD,
         UPDATE_REWARD,
         DESTROY_REWARD,
         RECEIVE_SINGLE_REWARD,
         receiveRewardDelete } from "../actions/reward_actions";
import { fetchSingleCampaign } from "../util/campaign_api_util.js";
import { fetchSingleReward,
         postSingleReward,
         patchSingleReward,
         deleteSingleReward } from "../util/reward_api_util.js";
import { receiveSingleCampaign } from "../actions/campaign_actions";

const RewardMiddleware = ({ getState, dispatch }) => next => action => {
  const fetchCampaignSuccess = data => dispatch(receiveSingleCampaign(data));
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
    case RECEIVE_SINGLE_REWARD:
      let campaignId = action.reward.campaign_id;
      fetchSingleCampaign(campaignId, fetchCampaignSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default RewardMiddleware;
