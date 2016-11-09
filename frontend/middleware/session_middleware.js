import { receiveCurrentUser,
         receiveSessionErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';
import { REQUEST_USER_CAMPAIGNS,
         receiveUserCampaigns } from '../actions/profile_actions';

import { signup, login, logout } from '../util/session_api_util';
import { fetchUserCampaigns } from '../util/profile_api_util';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const requestUserCampaignsSuccess = data => dispatch(receiveUserCampaigns(data));
  const errorCallback = xhr => dispatch(receiveSessionErrors(xhr.responseJSON));

  switch (action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    case REQUEST_USER_CAMPAIGNS:
      fetchUserCampaigns(action.user_id, requestUserCampaignsSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
