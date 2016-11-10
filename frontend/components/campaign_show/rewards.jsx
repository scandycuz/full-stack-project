import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Rewards extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const rewards = this.props.rewards;
    const rewardKeys = Object.keys(rewards);

    return (
      <div className="campaign-rewards-container">
        <ul className="campaign-rewards-list">
          {rewardKeys.map( (key) => {
            const reward = rewards[key]
            return (
              <li className="campaign-reward-item" key={key}>
                <h4 className="reward-price">${reward.price}</h4>
                <h4 className="reward-title">{reward.title}</h4>
                <p>{reward.description}</p>
                <h4 className="reward-estimatd-delivery">{reward.estimated_delivery}</h4>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default withRouter(Rewards);
