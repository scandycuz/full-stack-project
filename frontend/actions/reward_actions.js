export const REQUEST_SINGLE_REWARD = "REQUEST_SINGLE_REWARD";
export const RECEIVE_SINGLE_REWARD = "RECEIVE_SINGLE_REWARD";
export const RECEIVE_REWARD_ERRORS = "RECEIVE_REWARD_ERRORS";

export const requestSingleReward = id => ({
  type: REQUEST_SINGLE_REWARD,
  id
});

export const receiveSingleReward = reward => ({
  type: RECEIVE_SINGLE_REWARD,
  reward
});

export const receiveRewardErrors = errors => ({
  type: RECEIVE_REWARD_ERRORS,
  errors
});
