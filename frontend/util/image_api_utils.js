export const uploadImage = (image, success, error) => {
  $.ajax({
    url: `api/user/${user.id}`,
    type: 'PATCH',
    data: user,
    success,
    error
  })
}
