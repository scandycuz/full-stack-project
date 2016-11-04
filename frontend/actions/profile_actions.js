export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const REQUEST_SINGLE_PROFILE = "REQUEST_SINGLE_PROFILE";
export const RECEIVE_SINGLE_PROFILE = "RECEIVE_SINGLE_PROFILE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

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

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
