import { combineReducers } from 'redux';

import loadingReducer from './loading_reducer';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';

const RootReducer = combineReducers({
  loading: loadingReducer,
  session: SessionReducer,
  profile: ProfileReducer
});

export default RootReducer;
