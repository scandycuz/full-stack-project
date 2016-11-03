export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_PROFILE_WITH_IMAGE = "UPDATE_PROFILE_WITH_IMAGE";

export const updateProfile = profile => ({
  type: UPDATE_PROFILE,
  profile
});

export const updateProfileWithImage = profile => ({
  type: UPDATE_PROFILE_WITH_IMAGE,
  profile
});
