import React from 'react';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    return { modalIsOpen: false };
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let currentUser = this.props.currentUser;

    if (currentUser) {
      return(
        <ul className="signedIn-menu">
          <li>
            {currentUser.first_name}&nbsp;
            {currentUser.last_name} &nbsp;
            <i className="fa fa-chevron-down clickable" aria-hidden="true"></i>
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="signedOut-menu">
          <li><a href="#" onClick={this.openModal}>Sign Up</a></li>
          <li><a href="#">Log In</a></li>
        </ul>
      )
    }
  }

}

export default UserMenu;
