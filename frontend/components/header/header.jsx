import React from 'react';
import UserMenu from './user_menu';
import Modal from 'react-modal';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
    
    return(
      <header>
        <div className="siteHeader-content-left">
          <h1>StartupGoGo</h1>
          <ul>
            <li>Explore</li>
          </ul>
        </div>
        <div className="siteHeader-content-right">
          <a href="#" className="siteHeader-button">Create A Campaign</a>
          <UserMenu currentUser={this.props.currentUser} />
        </div>
      </header>
    )
  }

}

export default Header;
