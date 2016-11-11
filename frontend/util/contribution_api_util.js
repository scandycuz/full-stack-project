export const postContribution = (contribution, success) => {
  $.ajax({
    url: 'api/contributions',
    type: 'POST',
    data: contribution,
    success
  })
}

export const fetchUserContributions = (user_id, success) => {
  $.ajax({
    url: `/api/profiles/${user_id}/contributions`,
    type: 'GET',
    success
  })
}

export const fetchCampaignContributions = (campaign_id, success) => {
  $.ajax({
    url: `/api/campaigns/${campaign_id}/contributions`,
    type: 'GET',
    success
  })
}
