import { RECEIVE_SINGLE_PROFILE,
         RECEIVE_PROFILE_ERRORS,
         RECEIVE_USER_CAMPAIGNS } from '../actions/profile_actions';
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
    campaigns: {}
  },
  errors: []
});

const ProfileReducer = (state = _nullProfile, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SINGLE_PROFILE:
      const profile = action.profile;
      let newState = merge({}, state, { profile });
      return newState;
    case RECEIVE_PROFILE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullProfile, { errors });
    case RECEIVE_USER_CAMPAIGNS:
      const campaigns = action.campaigns;
      const newProfile = merge({}, state.profile, { campaigns })
      return merge({}, state, { profile: newProfile });
    default:
      return state;
  }
}

export default ProfileReducer;