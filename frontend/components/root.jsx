import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';

import App from './app';
import HomeContainer from './home/home_container';
import SessionFormContainer from './session/session_form_container';
import ProfileContainer from './profile/profile_container';
import ProfileCampaignsContainer from './profile_campaigns/profile_campaigns_container';
import ProfileContributionsContainer from './profile_contributions/profile_contributions_container';
import ProfileEditContainer from './profile_edit/profile_edit_container';
import CampaignContainer from './campaign/campaign_container';
import CampaignShowContainer from './campaign_show/campaign_show_container';
import CampaignEditContainer from './campaign_edit/campaign_edit_container';
import CampaignEditFormContainer from './campaign_edit/campaign_edit_form_container';
import CampaignPitchContainer from './campaign_pitch/campaign_pitch_container';
import RewardFormContainer from './reward/reward_form_container';

import { requestSingleProfile } from '../actions/profile_actions';

const Root = ({ store }) => {

  const requestProfile = (nextState) => {
    store.dispatch(requestSingleProfile(nextState.params.id));
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeContainer}/>
          <Route path="/profile/:id" component={ProfileContainer} onEnter={requestProfile}>
            <Route path="/profile/:id/campaigns" component={ProfileCampaignsContainer}/>
            <Route path="/profile/:id/contributions" component={ProfileContributionsContainer}/>
            <Route path="/profile/:id/edit" component={ProfileEditContainer}/>
          </Route>
          <Route path="/campaigns/:id" component={CampaignContainer}>
            <IndexRoute component={CampaignShowContainer}/>
            <Route path="/campaigns/:id/edit" component={CampaignEditContainer}>
              <IndexRedirect to="/campaigns/:id/edit/basics" />
              <Route path="/campaigns/:id/edit/basics" component={CampaignEditFormContainer}/>
              <Route path="/campaigns/:id/edit/story" component={CampaignEditFormContainer}/>
              <Route path="/campaigns/:id/edit/rewards" component={CampaignEditFormContainer}>
                <Route path="/campaigns/:id/edit/rewards/new" component={RewardFormContainer}/>
                <Route path="/campaigns/:id/edit/rewards/:reward_id" component={RewardFormContainer}/>
              </Route>
            </Route>
          </Route>
          <Route path="/pitch-a-startup" component={CampaignPitchContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
