export const uploadPhoto = (photo_url, success) => {
  $.ajax({
    url: `/api/images`,
    type: 'POST',
    data: {photo_url},
    success
  })
}
