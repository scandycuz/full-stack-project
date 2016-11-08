import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class GoalProgress extends React.Component {
  constructor(props) {
    super(props)

    this.barWidth = this.barWidth.bind(this);
  }

  componentDidUpdate() {
    this.barWidth();
  }

  barWidth() {
    let widthProportion = this.props.fundsReceived / this.props.goalAmount;
    let widthPixels = widthProportion * $('.progress-bar').outerWidth();
    $('.progress').outerWidth(widthPixels);
  }

  render() {
    const fundsReceived = this.props.fundsReceived;
    const goalAmount = this.props.goalAmount;
    const daysLeft = this.props.daysLeft;

    return (
      <div className="goal-progress-container">
        <h4>${fundsReceived} <span className="thin">raised</span></h4>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <div className="progress-stats">
          <p><strong>{fundsReceived / goalAmount * 100}%</strong> of ${goalAmount} goal</p>
          <p><strong>{daysLeft}</strong> days left</p>
        </div>
      </div>
    )
  }
}

export default withRouter(GoalProgress);
