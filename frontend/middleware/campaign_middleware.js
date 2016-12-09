import { UPDATE_CAMPAIGN,
         REQUEST_SINGLE_CAMPAIGN,
         CREATE_CAMPAIGN,
         REQUEST_CAMPAIGNS,
         REQUEST_FEATURED_CAMPAIGNS,
         receiveSingleCampaign,
         receiveFeaturedCampaigns,
         receiveCampaigns } from "../actions/campaign_actions";
import { RECEIVE_SINGLE_CONTRIBUTION } from "../actions/contribution_actions";
import { fetchSingleCampaign,
         patchCampaign,
         postCampaign,
         fetchCampaigns,
         fetchFeaturedCampaigns } from "../util/campaign_api_util.js";

const CampaignMiddleware = ({ getState, dispatch }) => next => action => {
  const updateCampaignSuccess = data => dispatch(receiveSingleCampaign(data));
  const fetchCampaignsSuccess = (data) => dispatch(receiveCampaigns(data));
  const fetchFeaturedCampaignsSuccess = (data) => dispatch(receiveFeaturedCampaigns(data));
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
    case REQUEST_FEATURED_CAMPAIGNS:
      fetchFeaturedCampaigns(fetchFeaturedCampaignsSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CampaignMiddleware;
