export const CREATE_CONTRIBUTION = "CREATE_CONTRIBUTION";
export const REQUEST_CAMPAIGN_CONTRIBUTIONS = "REQUEST_CAMPAIGN_CONTRIBUTIONS";
export const REQUEST_PROFILE_CONTRIBUTIONS = "REQUEST_PROFILE_CONTRIBUTIONS";
export const RECEIVE_CONTRIBUTIONS = "RECEIVE_CONTRIBUTIONS";
export const RECEIVE_SINGLE_CONTRIBUTION = "RECEIVE_SINGLE_CONTRIBUTION";

export const createContribution = contribution => {
  return ({
    type: CREATE_CONTRIBUTION,
    contribution
  })
};

export const requestCampaignContributions = campaignId => ({
  type: REQUEST_CAMPAIGN_CONTRIBUTIONS,
  campaignId
});

export const requestProfileContributions = userId => ({
  type: REQUEST_PROFILE_CONTRIBUTIONS,
  userId
});

export const receiveContributions = contributions => ({
  type: RECEIVE_CONTRIBUTIONS,
  contributions
});

export const receiveSingleContribution = contribution => ({
  type: RECEIVE_SINGLE_CONTRIBUTION,
  contribution
});
