import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Rewards extends React.Component {
  constructor(props) {
    super(props)

    this.state = props.contribution;
  }

  componentDidMount() {
  }

  render() {
    const rewards = this.props.rewards;
    const rewardKeys = Object.keys(rewards);
    const _nullContribution = {
      user_id: null,
      campaign_id: null,
      reward_id: null,
      amount: ""
    }

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
        if (!this.props.currentUser) {
          return alert('Please log in or Sign Up to Contribute.');
        }

        let target = e.target;
        let rewardId = $(target).data("id");
        let rewardTitle = $(target).data("title");
        this.props.updateParentState(rewardId, rewardTitle, rewardAmount);
      }
    }

    return (
      <div className="campaign-rewards-container">
        <ul className="campaign-rewards-list">
          {rewardKeys.map( (key) => {
            const reward = rewards[key]
            return (
              <li className="campaign-reward-item" key={key}>
                <div className="opacity-cover"></div>
                <h4 className="reward-price">${reward.price}</h4>
                <h4 className="reward-title">{reward.title}</h4>
                <p className="reward-description">{reward.description}</p>
                {estimatedDelivery(reward)}
                <button
                  onClick={confirmReward(reward.price)}
                  className="reward-claim-button button clickable"
                  data-id={key}
                  data-title={reward.title}>Claim Reward</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default withRouter(Rewards);
