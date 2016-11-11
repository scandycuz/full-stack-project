export const fetchSingleReward = (id, success) => {
  $.ajax({
    url: `api/rewards/${id}`,
    type: 'GET',
    success
  })
}

export const postSingleReward = (reward, success) => {
  $.ajax({
    url: `api/rewards`,
    type: 'POST',
    data: reward,
    success
  })
}
