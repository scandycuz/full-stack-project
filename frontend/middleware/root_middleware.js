import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ProfileMiddleware from './profile_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProfileMiddleware
);

export default RootMiddleware;
