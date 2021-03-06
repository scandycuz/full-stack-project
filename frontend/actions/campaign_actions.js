export const UPDATE_CAMPAIGN = "UPDATE_CAMPAIGN";
export const REQUEST_SINGLE_CAMPAIGN = "REQUEST_SINGLE_CAMPAIGN";
export const RECEIVE_SINGLE_CAMPAIGN = "RECEIVE_SINGLE_CAMPAIGN";
export const RECEIVE_CAMPAIGN_ERRORS = "RECEIVE_ERRORS";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";
export const REQUEST_CAMPAIGNS = "REQUEST_CAMPAIGNS";
export const RECEIVE_CAMPAIGNS = "RECEIVE_CAMPAIGNS";
export const REQUEST_FEATURED_CAMPAIGNS = "REQUEST_FEATURED_CAMPAIGNS";
export const RECEIVE_FEATURED_CAMPAIGNS = "RECEIVE_FEATURED_CAMPAIGNS";
export const REQUEST_CAMPAIGNS_QUERY = "REQUEST_CAMPAIGNS_QUERY";
export const RECEIVE_QUERIED_CAMPAIGNS = "RECEIVE_QUERIED_CAMPAIGNS";

export const requestCampaignsQuery = (queryString) => {
  return({
    type: REQUEST_CAMPAIGNS_QUERY,
    queryString
  })
}

export const receiveQueriedCampaigns = (queriedCampaigns) => {
  return ({
    type: RECEIVE_QUERIED_CAMPAIGNS,
    queriedCampaigns
  })
}

export const updateCampaign = campaign => ({
  type: UPDATE_CAMPAIGN,
  campaign
});

export const requestSingleCampaign = id => ({
  type: REQUEST_SINGLE_CAMPAIGN,
  id
});

export const receiveSingleCampaign = campaign => ({
  type: RECEIVE_SINGLE_CAMPAIGN,
  campaign
});

export const receiveCampaignErrors = errors => ({
  type: RECEIVE_CAMPAIGN_ERRORS,
  errors
});

export const uploadImage = () => {
  return ({
    type: UPLOAD_IMAGE
  })
};

export const receiveImage = () => ({
  type: RECEIVE_IMAGE
});

export const createCampaign = (campaign) => ({
  type: CREATE_CAMPAIGN,
  campaign
});

export const requestCampaigns = () => ({
  type: REQUEST_CAMPAIGNS
});

export const receiveCampaigns = (campaigns) => ({
  type: RECEIVE_CAMPAIGNS,
  campaigns
});

export const requestFeaturedCampaigns = () => {
  return ({
    type: REQUEST_FEATURED_CAMPAIGNS
  })
};

export const receiveFeaturedCampaigns = (featured_campaigns) => {
  return ({
    type: RECEIVE_FEATURED_CAMPAIGNS,
    featured_campaigns
  });
}
