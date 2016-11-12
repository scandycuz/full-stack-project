import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Rewards extends React.Component {
  constructor(props) {
    super(props)

    this.state = props.contribution;
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {

    if (this.state !== nextProps.contribution) {
      this.setState(nextProps.contribution)
    }
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
        // temporary:
        if (!this.props.currentUser) {
          alert('Please log in or Sign Up to Contribute.')
          return this.props.router.push('/');
        }

        let target = e.target;
        let rewardId = $(target).data("id");
        this.setState({amount: rewardAmount, reward_id: rewardId});
        target.innerHTML = `Claim for $${rewardAmount}?`;
        $(target).click(confirmCheckout);
      }
    }

    const confirmCheckout = (e) => {
      let target = e.target;
      target.removeEventListener("click", confirmCheckout);

      let contribution = this.state;
      let amount = this.props.campaign.funds_received + this.state.amount;
      let campaign = Object.assign({}, this.props.campaign, {funds_received: amount});
      this.props.createContribution({contribution});
      this.props.updateCampaign(campaign);
      this.setState(_nullContribution);
    }

    const onLeaveReward = (e) => {
      let $target = $(e.currentTarget).children('.button');
      $target.unbind("click");
      $target.text("Claim Reward");
    }

    return (
      <div className="campaign-rewards-container">
        <ul className="campaign-rewards-list">
          {rewardKeys.map( (key) => {
            const reward = rewards[key]
            return (
              <li onMouseLeave={onLeaveReward}
                className="campaign-reward-item" key={key}>
                <div className="opacity-cover"></div>
                <h4 className="reward-price">${reward.price}</h4>
                <h4 className="reward-title">{reward.title}</h4>
                <p className="reward-description">{reward.description}</p>
                {estimatedDelivery(reward)}
                <button
                  onClick={confirmReward(reward.price)}
                  className="reward-claim-button button clickable"
                  data-id={key}>Claim Reward</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default withRouter(Rewards);
