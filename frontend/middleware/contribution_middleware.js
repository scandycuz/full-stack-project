import { REQUEST_PROFILE_CONTRIBUTIONS,
         receiveContributions,
         receiveSingleContribution,
         CREATE_CONTRIBUTION } from "../actions/contribution_actions";
import { fetchProfileContributions,
         postContribution } from "../util/contribution_api_util.js";

const ContributionMiddleware = ({ getState, dispatch }) => next => action => {
  const fetchContributionsSuccess = data => dispatch(receiveContributions(data));
  const postContributionSuccess = data => dispatch(receiveSingleContribution(data));
  const logSuccess = data => console.log(data);

  switch (action.type) {
    // case REQUEST_PROFILE_CONTRIBUTIONS:
    //   fetchProfileContributions(action.userId, fetchContributionsSuccess);
    //   return next(action);
    case CREATE_CONTRIBUTION:
      postContribution(action.contribution, postContributionSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default ContributionMiddleware;
