import { RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  LOGOUT } from '../actions/session_actions';
import { RECEIVE_USER_CAMPAIGNS } from '../actions/profile_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: [],
  campaigns: {}
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case RECEIVE_SESSION_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });
    case RECEIVE_USER_CAMPAIGNS:
      const campaigns = action.campaigns;
      return merge({}, state, { campaigns });
    case LOGOUT:
      return merge({}, _nullUser);
    default:
      return state;
  }
}

export default SessionReducer;
