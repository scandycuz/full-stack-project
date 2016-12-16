import React from 'react';
import { Router, Route, hashHistory, withRouter } from 'react-router';

class CampaignPitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: null,
      goal_amount: "",
      title: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.sendSubmit = this.sendSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.setState({user_id: this.props.currentUser.id});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.campaign.title !== nextProps.campaign.title) {
      const createdCampaignId = nextProps.campaign.id;
      this.props.router.push(`/campaigns/${createdCampaignId}/edit/basics`);
    }
    if (!this.props.currentUser && nextProps.currentUser) {
      this.setState({user_id: nextProps.currentUser.id});
    }
    // redirect to home if user logs out
    if (!nextProps.currentUser) {
      this.props.router.push(`/`);
    }
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let currentGoalAmount = this.state.goal_amount
    this.setState(
      { goal_amount: parseInt(currentGoalAmount) },
      this.sendSubmit(this.state)
    );
  }

  sendSubmit(state) {
    let test = this.props.createCampaign({ campaign: this.state });
    this.props.requestUserCampaigns(this.props.currentUser.id);
  }

  render() {

    return(
      <div className="campaign-pitch container content">
        <div className="campaign-pitch-header">
          <h2>Pitch a Startup</h2>
          <p>Have a great idea for a startup? Pitch your idea and raise funds!</p>
        </div>
        <div className="campaign-pitch-body">
          <form>
            <label>What is your target funding goal?<br/>
              <span className="currency-symbol">$ <input
                type="text"
                value={this.state.goal_amount}
                onChange={this.update('goal_amount')}/></span>
            </label><br/>
            <label className="pitch-title-label">What is the title of your pitch?<br/>
              <input
                type="text"
                className="pitch-title"
                value={this.state.title}
                onChange={this.update('title')}/>
            </label><br/>
            <button className="create-campaign clickable button" onClick={this.handleSubmit}>Create my Pitch</button>
          </form>
        </div>
      </div>
    )
  }

}

export default withRouter(CampaignPitch);
