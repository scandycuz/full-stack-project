export const patchProfile = (profile, success) => {
  $.ajax({
    url: `api/profiles/${profile.id}`,
    type: 'POST',
    data: profile,
    success
  })
}
