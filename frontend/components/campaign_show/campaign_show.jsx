import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const children = this.props.children;

    return(
      <div className="campaign_show">
        <h4>Show</h4>
      </div>
    )
  }

}

export default withRouter(CampaignShow);
