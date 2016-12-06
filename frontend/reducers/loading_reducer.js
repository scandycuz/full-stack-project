import {
  REQUEST_SINGLE_PROFILE,
  RECEIVE_SINGLE_PROFILE,
  RECEIVE_PROFILE_ERRORS,
  UPLOAD_IMAGE,
  RECEIVE_IMAGE } from '../actions/profile_actions';
import {
  REQUEST_SINGLE_CAMPAIGN,
  RECEIVE_SINGLE_CAMPAIGN
} from '../actions/campaign_actions';

import {
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

export default (state = false, action) => {
  switch(action.type){
    // case UPLOAD_IMAGE:
    case REQUEST_SINGLE_CAMPAIGN:
    case REQUEST_SINGLE_PROFILE:
      return true;
    // case RECEIVE_IMAGE:
    case RECEIVE_SINGLE_PROFILE:
    case RECEIVE_PROFILE_ERRORS:
    case RECEIVE_SESSION_ERRORS:
    case RECEIVE_SINGLE_CAMPAIGN:
      return false;
    default:
      return state;
  }
};
