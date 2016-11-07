export const patchProfile = (profile, success) => {
  $.ajax({
    url: `api/profiles/${profile.id}`,
    type: 'PATCH',
    data: profile,
    success
  })
}

export const fetchSingleProfile = (id, success) => {
  $.ajax({
    url: `api/profiles/${id}`,
    type: 'GET',
    data: id,
    success
  })
}

export const fetchUserCampaigns = (profile_id, success) => {
  $.ajax({
    url: `api/profiles/${profile_id}/campaigns`,
    type: 'GET',
    data: profile_id,
    success
  })
}
