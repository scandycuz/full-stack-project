export const CREATE_CONTRIBUTION = "CREATE_CONTRIBUTION";
export const REQUEST_CAMPAIGN_CONTRIBUTIONS = "REQUEST_CAMPAIGN_CONTRIBUTIONS";
export const REQUEST_PROFILE_CONTRIBUTIONS = "REQUEST_PROFILE_CONTRIBUTIONS";
export const RECEIVE_PROFILE_CONTRIBUTIONS = "RECEIVE_PROFILE_CONTRIBUTIONS";

export const createContribution = contribution => ({
  type: CREATE_CONTRIBUTION,
  contribution
});

export const requestCampaignContributions = campaignId => ({
  type: REQUEST_CAMPAIGN_CONTRIBUTIONS,
  campaignId
});

export const requestProfileContributions = userId => ({
  type: REQUEST_PROFILE_CONTRIBUTIONS,
  userId
});

export const receiveProfileContributions = contributions => ({
  type: RECEIVE_PROFILE_CONTRIBUTIONS,
  contributions
});
