import React from 'react';
import UserMenu from './user_menu';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.redirectHome = this.redirectHome.bind(this);
    this.linkToPitch = this.linkToPitch.bind(this);
    this.setFormToLogin = this.setFormToLogin.bind(this);
    this.resetRedirect = this.resetRedirect.bind(this);
    this.update = this.update.bind(this);
    this.searchListener = this.searchListener.bind(this);

    this.state = {
      modalIsOpen: false,
      formType: "login",
      redirect: null,
      query: ""
    }
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.requestUserCampaigns(this.props.currentUser.id);
    }
    this.searchListener();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.currentUser && nextProps.currentUser) {
      this.props.requestUserCampaigns(nextProps.currentUser.id);
      this.props.requestCampaigns();
      // if (this.state.redirect) {
      //   let redirect = this.state.redirect;
      //   this.setState({redirect: null});
      //   this.props.router.push(redirect);
      // }
    }
  }

  searchListener() {
    $('.search-symbol input').focus( (e) => {
      let $input = $(e.target);
      let $container = $(e.target).closest('.search-symbol');
      let $icon = $(e.target).prev('i');
      $icon.click( (e) => {
        e.preventDefault();
        e.stopPropagation();
        let query = $input.val();
        // send query
        this.props.requestCampaignsQuery(query);
      });
      $container.addClass('selected-input');
      $input.css('width', '16em');
      $input.keydown( (e) => {
        if (e.which == 13) {
          e.stopPropagation();
          e.preventDefault();
          let query = $input.val();
          // send query
          this.props.requestCampaignsQuery(query);
        }
      });
      $input.focusout( () => {
        $container.removeClass('selected-input');
        $input.css('width', '10em');
      });
    });
  }

  enterListener() {
    $('input[type=text]').on('keydown', function(e) {
      if (e.which == 13) {
          e.preventDefault();
      }
    });
  }

  redirectHome() {
    this.props.router.push("/");
  }

  setFormToLogin() {
    this.setState({formType: "login"});
  }

  linkToPitch(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.router.push('/pitch-a-startup');
    } else {
      this.setState({
        formType: "login",
        modalIsOpen: true,
        redirect: '/pitch-a-startup'
      });
    }
  }

  resetRedirect() {
    this.setState({redirect: null});
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {

    return(
      <header className="siteHeader">
        <div className="siteHeader-content-left">
          <h1 className="siteLogo" onClick={this.redirectHome}>StartupGoGo</h1>
          <ul>
            <li>
              <span className="search-symbol">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input
                  type="text"
                  value={this.state.query}
                  onChange={this.update('query')}/>
              </span>
            </li>
          </ul>
        </div>
        <div className="siteHeader-content-right">
          <a href="#" className="siteHeader-button button"
             onClick={this.linkToPitch}>Pitch A Startup</a>
          <UserMenu
            processForm={this.props.processForm}
            logout={this.props.logout}
            currentUser={this.props.currentUser}
            loggedIn={this.props.loggedIn}
            receiveSessionErrors={this.props.receiveSessionErrors}
            errors={this.props.errors}
            campaigns={this.props.campaigns}
            router={this.props.router}
            requestUserCampaigns={this.props.requestUserCampaigns}
            requestSingleCampaign={this.props.requestSingleCampaign}
            modalIsOpen={this.state.modalIsOpen}
            redirect={this.state.redirect}
            resetRedirect={this.resetRedirect}
            router={this.props.router}
            formType={this.state.formType}/>
        </div>
      </header>
    )
  }

}

export default withRouter(Header);
