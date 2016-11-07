import { RECEIVE_SINGLE_CAMPAIGN,
  RECEIVE_CAMPAIGN_ERRORS } from '../actions/campaign_actions';
import { fetchSingleCampaign } from '../util/campaign_api_util'
import merge from 'lodash/merge';

const _nullCampaign= Object.freeze({
  campaign: {
    funds_received: 0,
    goal_amount: 0
  },
  campaigns: {},
  errors: []
});

const CampaignReducer = (state = _nullCampaign, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SINGLE_CAMPAIGN:
      const campaign = action.campaign;
      let newState = merge({}, state, { campaign });
      return newState;
    case RECEIVE_CAMPAIGN_ERRORS:
      const errors = action.errors;
      return merge({}, _nullCampaign, {
        errors
      });
    default:
      return state;
  }
}

export default CampaignReducer;
