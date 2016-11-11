import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Rewards extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
  }

  render() {
    const rewards = this.props.rewards;
    const rewardKeys = Object.keys(rewards);

    const inventory = (reward) => {
      if (reward.inventory) {
        // add backers using contributer association
        return(
          <p className="reward-claimed"></p>
        )
      }
    }

    const estimatedDelivery = (reward) => {
      if (reward.estimated_delivery) {
        return (
          <h4 className="reward-estimated-delivery">Estimated {reward.estimated_delivery}</h4>
        )
      }
    }

    const confirmReward = (rewardAmount) => {
      return (e) => {
        let target = e.target;
        target.innerHTML = `Claim for $${rewardAmount}?`;
      }
    }

    const onLeaveReward = (e) => {
      let $target = $(e.currentTarget).children('.button');
      $target.text("Claim Reward");
    }

    return (
      <div className="campaign-rewards-container">
        <ul className="campaign-rewards-list">
          {rewardKeys.map( (key) => {
            const reward = rewards[key]
            return (
              <li onMouseLeave={onLeaveReward} className="campaign-reward-item" key={key}>
                <div className="opacity-cover"></div>
                <h4 className="reward-price">${reward.price}</h4>
                <h4 className="reward-title">{reward.title}</h4>
                <p className="reward-description">{reward.description}</p>
                {estimatedDelivery(reward)}
                <button
                  onClick={confirmReward(reward.price)}
                  className="reward-claim-button button clickable">Claim Reward</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default withRouter(Rewards);
