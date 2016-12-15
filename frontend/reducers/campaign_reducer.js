import { RECEIVE_SINGLE_CAMPAIGN,
         RECEIVE_CAMPAIGNS,
         RECEIVE_CAMPAIGN_ERRORS,
         RECEIVE_FEATURED_CAMPAIGNS,
         RECEIVE_QUERIED_CAMPAIGNS,
         REQUEST_CAMPAIGNS_QUERY } from '../actions/campaign_actions';
import { RECEIVE_REWARD_DELETE } from '../actions/reward_actions';
import { RECEIVE_SINGLE_CONTRIBUTION } from '../actions/contribution_actions';
import { fetchSingleCampaign } from '../util/campaign_api_util';
import merge from 'lodash/merge';

const _nullCampaign= Object.freeze({
  campaign: {
    title: "",
    funds_received: 0,
    goal_amount: 0,
    card_image_url: "",
    slider_image_url: "",
    pitch_image_url: "",
    pitch_video_url: "",
    campaign_overview: "",
    campaign_pitch: "",
    author: {},
    rewards: {},
    contributors: {}
  },
  campaigns: {},
  errors: [],
  queryString: "",
  queriedCampaigns: {}
});

const CampaignReducer = (state = _nullCampaign, action) => {
  Object.freeze(state);
  let newState;
  let clonedState;
  let campaign;

  switch(action.type) {
    case REQUEST_CAMPAIGNS_QUERY:
      let queryString = action.queryString;
      newState = merge({}, state, {queryString});
      return newState;
    case RECEIVE_QUERIED_CAMPAIGNS:
      let queriedCampaigns = action.queriedCampaigns;
      let resetState = merge({}, state);
      resetState.queriedCampaigns = {};
      newState = merge({}, resetState, {queriedCampaigns});
      return newState;
    case RECEIVE_SINGLE_CAMPAIGN:
      campaign = action.campaign;
      clonedState = merge({}, state);
      clonedState.campaign.rewards = {};
      clonedState.campaign.author = {};
      clonedState.campaign.contributors = {};
      newState = merge({}, clonedState, { campaign });
      return newState;
    case RECEIVE_CAMPAIGNS:
      const campaigns = action.campaigns;
      newState = merge({}, state, { campaigns });
      return newState;
    case RECEIVE_CAMPAIGN_ERRORS:
      const errors = action.errors;
      return merge({}, _nullCampaign, {
        errors
      });
    case RECEIVE_REWARD_DELETE:
      campaign = action.campaign;
      clonedState = merge({}, state);
      clonedState.campaign.rewards = {};
      return merge({}, clonedState, {campaign});
    case RECEIVE_FEATURED_CAMPAIGNS:
      const featured_campaigns = action.featured_campaigns;
      newState = merge({}, state, { featured_campaigns });
      return newState;
    default:
      return state;
  }
}

export default CampaignReducer;
