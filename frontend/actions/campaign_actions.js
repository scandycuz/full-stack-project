export const UPDATE_CAMPAIGN = "UPDATE_CAMPAIGN";
export const REQUEST_SINGLE_CAMPAIGN = "REQUEST_SINGLE_CAMPAIGN";
export const RECEIVE_SINGLE_CAMPAIGN = "RECEIVE_SINGLE_CAMPAIGN";
export const RECEIVE_CAMPAIGN_ERRORS = "RECEIVE_ERRORS";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";

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

export const uploadImage = () => ({
  type: UPLOAD_IMAGE
});

export const receiveImage = () => ({
  type: RECEIVE_IMAGE
});

export const createCampaign = (campaign) => ({
  type: CREATE_CAMPAIGN,
  campaign
});
