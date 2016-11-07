import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class CampaignEditForm extends React.Component {
  constructor(props) {
    super(props)


  }

  render() {
    return(
      <div className="campaign-edit-form-container container">
        <form>
          <h4>Form</h4>
        </form>
      </div>
    )
  }
}

export default withRouter(CampaignEditForm);
