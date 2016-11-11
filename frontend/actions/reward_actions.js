export const REQUEST_SINGLE_REWARD = "REQUEST_SINGLE_REWARD";
export const RECEIVE_SINGLE_REWARD = "RECEIVE_SINGLE_REWARD";
export const RECEIVE_REWARD_ERRORS = "RECEIVE_REWARD_ERRORS";
export const CREATE_REWARD = "CREATE_REWARD";
export const UPDATE_REWARD = "UPDATE_REWARD";
export const DESTROY_REWARD = "DESTROY_REWARD";
export const RECEIVE_REWARD_DELETE = "RECEIVE_REWARD_DELETE";

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

export const createReward = reward => ({
  type: CREATE_REWARD,
  reward
});

export const updateReward = reward => ({
  type: UPDATE_REWARD,
  reward
});

export const destroyReward = id => ({
  type: DESTROY_REWARD,
  id
});

export const receiveRewardDelete = campaign => ({
  type: RECEIVE_REWARD_DELETE,
  campaign
});
