export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const REQUEST_SINGLE_PROFILE = "REQUEST_SINGLE_PROFILE";
export const RECEIVE_SINGLE_PROFILE = "RECEIVE_SINGLE_PROFILE";
export const RECEIVE_PROFILE_ERRORS = "RECEIVE_ERRORS";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const REQUEST_USER_CAMPAIGNS = "REQUEST_USER_CAMPAIGNS";
export const RECEIVE_USER_CAMPAIGNS = "RECEIVE_USER_CAMPAIGNS";

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

export const receiveImage = () => ({
  type: RECEIVE_IMAGE
});

export const requestUserCampaigns = (user_id) => ({
  type: REQUEST_USER_CAMPAIGNS,
  user_id
})

export const receiveUserCampaigns = (campaigns) => ({
  type: RECEIVE_USER_CAMPAIGNS,
  campaigns
})
