import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

const GoalProgress = ({fundsReceived, goalAmount, endDate, daysLeft}) => {

  return (
    <div className="goal-progress-container">
      <h4>$ {fundsReceived}</h4>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <div className="progress-stats">
        <p>{fundsReceived / goalAmount * 100}% of {goalAmount} goal</p>
        <p>{daysLeft} days left</p>
      </div>
    </div>
  )
}

export default withRouter(GoalProgress);
