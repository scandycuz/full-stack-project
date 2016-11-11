import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class GoalProgress extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {

    let fundsReceived = 0;
    if (this.props.fundsReceived) {
      fundsReceived = this.props.fundsReceived;
    }

    const goalAmount = this.props.goalAmount;
    const daysLeft = this.props.daysLeft;

    const componentType = this.props.componentType;
    const dynamicClass = (type) => {
      switch(type) {
        case "index":
          return "goal-progress-container index-goal-item";
        default:
          return "goal-progress-container";
      }
    }

    let style = {
      width: fundsReceived / goalAmount * 100 + "%"
    }

    return (
      <div className={dynamicClass(componentType)}>
        <h4>${fundsReceived} <span className="thin">raised</span></h4>
        <div className="progress-bar">
          <div className="progress" style={style}></div>
        </div>
        <div className="progress-stats">
          <p><strong>{Math.floor(fundsReceived / goalAmount * 100)}%</strong>
          <span className="index-hidden"> of ${goalAmount} goal</span>
          <span className="index-displayed">&nbsp;funded</span>
          </p>
          <p><strong>{daysLeft}</strong> days left</p>
        </div>
      </div>
    )
  }
}

export default withRouter(GoalProgress);
