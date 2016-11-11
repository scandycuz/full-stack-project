import { RECEIVE_SINGLE_PROFILE,
         RECEIVE_PROFILE_ERRORS } from '../actions/profile_actions';
import { LOGOUT } from '../actions/session_actions';
import { CREATE_CONTRIBUTION } from '../actions/contribution_actions';
import { RECEIVE_PROFILE_CONTRIBUTIONS } from '../actions/contribution_actions'
import { postContribution } from '../util/contribution_api_util';
import merge from 'lodash/merge';

const _nullProfile = Object.freeze({
  profile: {
    user_id: "",
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    postal_code: "",
    description: "",
    about: "",
    photo_url: "",
    small_photo_url: "",
    campaigns: {},
    contributions: {}
  },
  errors: []
});

const ProfileReducer = (state = _nullProfile, action) => {
  Object.freeze(state);
  let clonedState = merge({}, state);
  let newState;

  switch(action.type) {
    case RECEIVE_SINGLE_PROFILE:
      const profile = action.profile;
      clonedState.profile.campaigns = {};
      newState = merge({}, clonedState, {profile});
      return newState;
    case RECEIVE_PROFILE_CONTRIBUTIONS:
      const contributions = action.contributions
      clonedState = merge({}, state);
      clonedState.profile.contributions = {};
      newState = merge({}, clonedState, {contributions});
      return newState;
    case RECEIVE_PROFILE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullProfile, { errors });
    case LOGOUT:
      return merge({}, _nullProfile);
    default:
      return state;
  }
}

export default ProfileReducer;
