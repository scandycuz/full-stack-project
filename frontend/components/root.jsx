import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import HomeContainer from './home/home_container';
import SessionFormContainer from './session/session_form_container';
import ProfileContainer from './profile/profile_container';
import ProfileCampaignsContainer from './profile_campaigns/profile_campaigns_container';
import ProfileContributionsContainer from './profile_contributions/profile_contributions_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;

    if (currentUser) {
      replace("/");
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/profile/:id" component={ProfileContainer}>
            <Route path="/profile/:id/campaigns" component={ProfileCampaignsContainer}/>
            <Route path="/profile/:id/contributions" component={ProfileContributionsContainer}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
