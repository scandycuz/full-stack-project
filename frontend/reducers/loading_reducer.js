import {
  REQUEST_SINGLE_PROFILE,
  RECEIVE_SINGLE_PROFILE,
  RECEIVE_PROFILE_ERRORS,
  RECEIVE_IMAGE,
  RECEIVE_USER_CAMPAIGNS } from '../actions/profile_actions';
import {
  REQUEST_SINGLE_CAMPAIGN,
  RECEIVE_SINGLE_CAMPAIGN,
  RECEIVE_CAMPAIGN_ERRORS,
  RECEIVE_CAMPAIGNS
} from '../actions/campaign_actions';

import {
  RECEIVE_CONTRIBUTIONS,
  RECEIVE_SINGLE_CONTRIBUTION
} from '../actions/contribution_actions';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

import {
  RECEIVE_SINGLE_REWARD,
  RECEIVE_REWARD_ERRORS,
  RECEIVE_REWARD_DELETE
} from '../actions/reward_actions';

export default (state = true, action) => {
  switch(action.type){
    case REQUEST_SINGLE_CAMPAIGN:
    case REQUEST_SINGLE_PROFILE:
      return true;
    case RECEIVE_SINGLE_PROFILE:
    case RECEIVE_PROFILE_ERRORS:
    case RECEIVE_IMAGE:
    case RECEIVE_USER_CAMPAIGNS:
    case RECEIVE_SINGLE_CAMPAIGN:
    case RECEIVE_CAMPAIGN_ERRORS:
    case RECEIVE_CAMPAIGNS:
    case RECEIVE_CONTRIBUTIONS:
    case RECEIVE_SINGLE_CONTRIBUTION:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_SESSION_ERRORS:
    case RECEIVE_SINGLE_REWARD:
    case RECEIVE_REWARD_ERRORS:
    case RECEIVE_REWARD_DELETE:
      return false;
    default:
      return state;
  }
};
