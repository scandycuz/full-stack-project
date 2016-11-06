import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Campaign extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const children = this.props.children;

    return(
      <div className="campaign">
        <h3>Campaign</h3>
      </div>
    )
  }

}

export default withRouter(Campaign);
