import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.replace("/");
    }
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
  }

  renderErrors() {
    return(
      <ul className="errors-list">
        {this.props.errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  render() {
    const buttonLabel = (this.props.formType === "login") ? "Login" : "Sign up";

    const userForm = () => (
      <form onSubmit={this.handleSubmit} className="login-form-box">
        <label> Email:
          <input type="text"
                 className="login-input"
                 value={this.state.username}
                 onChange={this.update("email")}/>
        </label>
        <label> Password:
          <input type="password"
                 className="login-input"
                 value={this.state.password}
                 onChange={this.update("password")} />
        </label>
        <button>{ buttonLabel }</button>
      </form>
    );

    if (this.props.formType === "login") {
      return (
        <div>
          <h4>Login or <Link to="/signup">Sign up</Link></h4>
          {userForm()}
          {this.renderErrors()}
        </div>
      );
    } else {
      return (
        <div>
          <h4>Sign up or <Link to="/login">Login</Link></h4>
          {userForm()}
          {this.renderErrors()}
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);
