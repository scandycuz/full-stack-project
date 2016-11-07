import { RECEIVE_SINGLE_PROFILE,
         RECEIVE_PROFILE_ERRORS,
         RECEIVE_USER_CAMPAIGNS } from '../actions/profile_actions';
import merge from 'lodash/merge';

const _nullProfile = Object.freeze({
  profile: {
    user_id: "",
    title: "",
    tagline: "",
    funds_received: 0,
    goal_amount: 0,
    card_image_url: "",
    pitch_image_url: "",
    campaign_overview: "",
    campaign_pitch: "",
    status: "draft",
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
