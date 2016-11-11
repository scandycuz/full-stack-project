import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ProfileMiddleware from './profile_middleware';
import CampaignMiddleware from './campaign_middleware';
import RewardMiddleware from './reward_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProfileMiddleware,
  CampaignMiddleware,
  RewardMiddleware
);

export default RootMiddleware;
