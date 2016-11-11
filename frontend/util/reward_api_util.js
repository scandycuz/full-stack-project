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

export const patchSingleReward = (reward, success) => {
  $.ajax({
    url: `api/rewards/${reward.id}`,
    type: 'PATCH',
    data: reward,
    success
  })
}

export const deleteSingleReward = (id, success) => {
  $.ajax({
    url: `api/rewards/${id}`,
    type: 'DELETE',
    success
  })
}
