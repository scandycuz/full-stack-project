import { UPDATE_PROFILE,
         UPDATE_PROFILE_WITH_IMAGE,
         updateProfile,
         receiveProfile } from "../actions/profile_actions";
import { uploadPhoto } from "../util/image_api_utils";
import { patchProfile } from "../util/profile_api_util.js";

const ProfileMiddleware = ({ getState, dispatch }) => next => action => {
  const uploadPhotoSuccess = profile => dispatch(updateProfile(profile));
  const updateProfileSuccess = data => dispatch(receiveProfile(data));
  const error = data => console.log(data);

  switch (action.type) {
    case UPDATE_PROFILE_WITH_IMAGE:
      uploadPhoto(action.profile.photo_url, (data) => console.log(data));
      return next(action);
    case UPDATE_PROFILE:
      patchProfile(action.profile, updateProfileSuccess);
    default:
      return next(action);
  }
};

export default ProfileMiddleware;
