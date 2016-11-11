import { REQUEST_PROFILE_CONTRIBUTIONS,
         receiveProfileContributions } from "../actions/contribution_actions";
import { fetchProfileContributions } from "../util/contribution_api_util.js";

const CampaignMiddleware = ({ getState, dispatch }) => next => action => {
  const fetchContributionsSuccess = data => dispatch(receiveProfileContributions(data));
  const logSuccess = data => console.log(data);

  switch (action.type) {
    case REQUEST_PROFILE_CONTRIBUTIONS:
      fetchProfileContributions(action.userId, fetchContributionsSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CampaignMiddleware;
