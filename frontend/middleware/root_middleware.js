import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ProfileMiddleware from './profile_middleware';
import CampaignMiddleware from './campaign_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProfileMiddleware,
  CampaignMiddleware
);

export default RootMiddleware;
