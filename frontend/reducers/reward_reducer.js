import { RECEIVE_SINGLE_REWARD,
         RECEIVE_REWARD_DELETE } from '../actions/reward_actions';
import { receiveSingleCampaign } from "../actions/campaign_actions";
import { fetchSingleCampaign } from "../util/campaign_api_util.js";

import merge from 'lodash/merge';

const _nullReward = Object.freeze({
  reward: {
    campaign_id: null,
    price: null,
    title: "",
    description: "",
    number_available: null,
    estimated_delivery: "",
    requires_shipping: false,
    inventory: null
  },
  errors: []
});

const RewardReducer = (state = _nullReward, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SINGLE_REWARD:
      let reward = action.reward;
      let newState = merge({}, state, {reward});
      return newState;
    case RECEIVE_REWARD_DELETE:
      return merge({}, _nullReward);
    default:
      return state;
  }
}

export default RewardReducer;
