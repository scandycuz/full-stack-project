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
