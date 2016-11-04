import { UPDATE_PROFILE,
         REQUEST_SINGLE_PROFILE,
         receiveSingleProfile } from "../actions/profile_actions";
import { fetchSingleProfile,
         patchProfile } from "../util/profile_api_util.js";

const ProfileMiddleware = ({ getState, dispatch }) => next => action => {
  // const updateProfileSuccess = data => dispatch(receiveSingleProfile(data));
  const updateProfileSuccess = data => dispatch(receiveSingleProfile(data));
  const logSuccess = data => console.log(data);

  switch (action.type) {
    case UPDATE_PROFILE:
      patchProfile(action.profile, updateProfileSuccess);
      return next(action);
    case REQUEST_SINGLE_PROFILE:
      fetchSingleProfile(action.id, updateProfileSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default ProfileMiddleware;
