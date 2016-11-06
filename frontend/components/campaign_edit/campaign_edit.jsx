import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class CampaignEdit extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const children = this.props.children;

    return(
      <div className="campaign_edit">
        <h4>Edit</h4>
      </div>
    )
  }

}

export default withRouter(CampaignEdit);
