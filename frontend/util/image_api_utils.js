export const uploadPhoto = (image, success) => {
  $.ajax({
    url: `/api/images`,
    type: 'POST',
    data: {photo_url: image},
    success
  })
}
