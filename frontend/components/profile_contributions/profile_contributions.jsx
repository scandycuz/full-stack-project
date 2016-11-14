import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class ProfileContributions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPath: this.props.currentPath
    }
    this.contributionItems = this.contributionItems.bind(this);
  }

  componentDidUpdate() {
    if (!this.props.currentUser) {
      const id = this.props.params.id
      this.props.router.replace(`/profile/${id}`);
    }
  }

  contributionItems() {
    if (this.props.contributions) {
      const contributions = this.props.contributions;
      const contributionKeys = Object.keys(contributions);

      return (
        contributionKeys.map( (id) => {
          const contribution = contributions[id];
          const campaign = contribution.campaign;
          let reward = {};
          if (contribution.reward) {
            reward = contribution.reward;
          }
          return (
            <tr key={id}>
              <td>${contribution.amount}</td>
              <td>{campaign.title}</td>
              <td>{(reward.title) ? reward.title : ""}</td>
              <td>{(reward.estimated_delivery) ? reward.estimated_delivery : ""}</td>
            </tr>
          )
        })
      )
    }
  }

  render() {

    return(
      <div>
        <h3>Contributions</h3>
          <table className="contribution-table" cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Campaign</th>
                <th>Reward</th>
                <th>Est. Shipping Date</th>
              </tr>
            </thead>
            <tbody>
              {this.contributionItems()}
            </tbody>
          </table>
      </div>
    )
  }

}

export default withRouter(ProfileContributions);
