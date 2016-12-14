export const patchCampaign = (campaign, success) => {
  $.ajax({
    url: `api/campaigns/${campaign.id}`,
    type: 'PATCH',
    data: campaign,
    success
  })
}

export const fetchSingleCampaign = (id, success) => {
  $.ajax({
    url: `api/campaigns/${id}`,
    type: 'GET',
    success
  })
}

export const postCampaign = (campaign, success) => {
  $.ajax({
    url: 'api/campaigns',
    type: 'POST',
    data: campaign,
    success
  })
}

export const fetchCampaigns = (success) => {
  $.ajax({
    url: `api/campaigns`,
    type: 'GET',
    success
  })
}

export const fetchCampaignsQuery = (queryString, success) => {
  $.ajax({
    url: `api/campaigns`,
    type: 'GET',
    data: {"query": queryString},
    success
  })
}

export const fetchFeaturedCampaigns = (success) => {
  $.ajax({
    url: `api/campaigns`,
    type: 'GET',
    data: {"featured": true},
    success
  })
}
