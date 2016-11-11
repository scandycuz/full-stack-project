import { combineReducers } from 'redux';

import loadingReducer from './loading_reducer';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';
import CampaignReducer from './campaign_reducer';
import RewardReducer from './reward_reducer';

const RootReducer = combineReducers({
  loading: loadingReducer,
  session: SessionReducer,
  profile: ProfileReducer,
  campaign: CampaignReducer,
  reward: RewardReducer
});

export default RootReducer;
