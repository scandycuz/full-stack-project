import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class RewardForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  componentWillReceiveProps(nextProps) {

  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleSubmit(this.state);
  }

  render() {

    return(
      <div className="campaign-edit-form-container container">
        <div className="reward-ajax-form">
          <h4>Create new reward form</h4>
        </div>
      </div>
    )
  }

}

export default withRouter(RewardForm);
