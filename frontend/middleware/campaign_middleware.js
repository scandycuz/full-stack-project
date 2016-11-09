import { UPDATE_CAMPAIGN,
         REQUEST_SINGLE_CAMPAIGN,
         CREATE_CAMPAIGN,
         REQUEST_CAMPAIGNS,
         receiveSingleCampaign,
         receiveCampaigns } from "../actions/campaign_actions";
import { fetchSingleCampaign,
         patchCampaign,
         postCampaign,
         fetchCampaigns } from "../util/campaign_api_util.js";

const CampaignMiddleware = ({ getState, dispatch }) => next => action => {
  const updateCampaignSuccess = data => dispatch(receiveSingleCampaign(data));
  const fetchCampaignsSuccess = (data) => dispatch(receiveCampaigns(data));
  const logSuccess = data => console.log(data);

  switch (action.type) {
    case UPDATE_CAMPAIGN:
      patchCampaign(action.campaign, updateCampaignSuccess);
      return next(action);
    case REQUEST_SINGLE_CAMPAIGN:
      fetchSingleCampaign(action.id, updateCampaignSuccess);
      return next(action);
    case CREATE_CAMPAIGN:
      postCampaign(action.campaign, updateCampaignSuccess);
      return next(action);
    case REQUEST_CAMPAIGNS:
      fetchCampaigns(fetchCampaignsSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CampaignMiddleware;
