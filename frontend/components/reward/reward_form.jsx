import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class RewardForm extends React.Component {
  constructor(props) {
    super(props)

    let rewardId = parseInt(props.params.reward_id);

    let currentPath = props.currentPath();
    if (currentPath !== 'new') {
      props.requestSingleReward(rewardId);
      this.state = props.reward;
    } else {
      this.state = {};
    }
  }

  componentWillReceiveProps(nextProps , { location }) {
    if (nextProps.reward !== this.state) {
      let reward = nextProps.reward;
      this.setState(reward);
    }
    if (nextProps.params.reward_id !== this.props.params.reward_id) {
      this.props.requestSingleReward(nextProps.params.reward_id);
    }
  }

  componentDidUpdate() {
    if (!this.state.campaign_id) {
      this.setState({campaign_id: this.props.params.id});
    }
  }

  update(property) {
    return e => {
      let targetValue = e.target.value;

      switch (property) {
        case "requires_shipping":
          let stateValue = (targetValue === "true") ? true : false;
          this.setState({[property]: stateValue});
          default:
            this.setState({[property]: e.target.value});
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleSubmit(this.state);
  }

  render() {

    const radioStatus = this.state.requires_shipping;

    const closeRewardEdit = (e) => {
      e.preventDefault();
      let id = this.props.params.id;
      this.props.router.push(`/campaigns/${id}/edit/rewards`);
    }

    const deleteReward = (e) => {
      e.preventDefault();
      let id = this.props.params.reward_id;
      this.props.destroyReward(id);
      let campaignId = this.props.campaign.id;
      this.props.router.push(`/campaigns/${campaignId}/edit/rewards`);
    }

    const createReward = (e) => {
      e.preventDefault();
      let reward = this.state;
      this.props.createReward({reward});
      let campaignId = this.props.campaign.id;
      this.props.router.push(`/campaigns/${campaignId}/edit/rewards`);
    }

    const saveReward = (e) => {
      e.preventDefault();
      let reward = this.state;
      this.props.updateReward({reward});
      let campaignId = this.props.campaign.id;
      this.props.router.push(`/campaigns/${campaignId}/edit/rewards`);
    }

    const rewardButtons = () => {
      let currentPath = this.props.currentPath();

      if (currentPath === "new") {
        return (
          <ul className="reward-buttons-list">
            <li className="clickable" onClick={closeRewardEdit}>Cancel</li>
            <li className="clickable button" onClick={createReward}>Add Reward</li>
          </ul>
        );
      } else if (currentPath === "edit") {
        return (
          <ul className="reward-buttons-list">
            <li className="clickable" onClick={closeRewardEdit}>Cancel</li>
            <li className="clickable button delete-reward-button" onClick={deleteReward}>Delete Reward</li>
            <li className="clickable button" onClick={saveReward}>Save Reward</li>
          </ul>
        )
      }
    }

    return(
      <div className="campaign-edit-form-container">
        <div className="reward-buttons-container">
          {rewardButtons()}
        </div>
        <div className="reward-ajax-form group">
          <div className="grid-4 alpha reward-form-col">
            <label>Title<br/>
              <span className="form-sub-title">Enter what you would like the reward to be called</span><br/>
              <input type="text"
                className="campaign-reward-title"
                value={this.state.title}
                onChange={this.update('title')}/>
            </label>
          </div>
          <div className="grid-4 omega reward-form-col">
            <label>Price<br/>
              <span className="form-sub-title">The price contributors must match to receive the reward</span><br/>
              <span className="currency-symbol">$ <input
                type="text"
                value={this.state.price}
                onChange={this.update('price')}/></span>
            </label>
          </div>
          <div className="grid-4 alpha reward-form-col">
            <label>Number Available<br/>
              <span className="form-sub-title">Leave blank if it should be unlimited.</span><br/>
              <input type="text"
                className="campaign-reward-title"
                value={this.state.number_available}
                onChange={this.update('number_available')}/>
            </label>
          </div>

          <div className="grid-4 alpha reward-form-col">
            <label>Requires Shipping?<br/>
              <span className="form-sub-title">Does the reward require shipping?</span><br/>
                <div className="radio-container">
                  <input type="radio"
                    name="shipping_required"
                    value="true"
                    checked={radioStatus}
                    onChange={this.update('requires_shipping')}/> Yes
                  <input type="radio"
                    name="shipping_required"
                    value="false"
                    checked={!radioStatus}
                    onChange={this.update('requires_shipping')}/> No
                </div>
            </label>
          </div>
          <div className="grid-4 reward-form-col">
            <label>Estimated Shipping Date<br/>
            <span className="form-sub-title">Enter a date if shipping is required</span><br/>
            <input
              type="date"
              value={this.state.estimated_delivery}
              placeholder="MM/DD/YYYY"
              onChange={this.update('estimated_delivery')}/>
            </label>
          </div>
          <div className="grid-12 alpha reward-form-col reward-description-textarea">
            <label>Description<br/>
              <span className="form-sub-title">Describe the details of what backers will receive with this reward.</span><br/>
              <textarea
                value={this.state.description}
                onChange={this.update('description')}/>
            </label>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(RewardForm);
