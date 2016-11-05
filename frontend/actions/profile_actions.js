export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const REQUEST_SINGLE_PROFILE = "REQUEST_SINGLE_PROFILE";
export const RECEIVE_SINGLE_PROFILE = "RECEIVE_SINGLE_PROFILE";
export const RECEIVE_PROFILE_ERRORS = "RECEIVE_ERRORS";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const RECEIVED_IMAGE = "RECEIVED_IMAGE";

export const updateProfile = profile => ({
  type: UPDATE_PROFILE,
  profile
});

export const requestSingleProfile = id => ({
  type: REQUEST_SINGLE_PROFILE,
  id
});

export const receiveSingleProfile = profile => ({
  type: RECEIVE_SINGLE_PROFILE,
  profile
});

export const receiveProfileErrors = errors => ({
  type: RECEIVE_PROFILE_ERRORS,
  errors
});

export const uploadImage = () => ({
  type: UPLOAD_IMAGE
});

export const receivedImage = () => ({
  type: RECEIVED_IMAGE
});
