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
    this.mobileSearchListener = this.mobileSearchListener.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.state = {
      modalIsOpen: false,
      formType: "login",
      redirect: null,
      query: "",
      menuOpen: false
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

    if (this.props.queriedCampaigns) {
      this.setState({query: ""});
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
        if (query === "") { return; }
        // send query
        this.props.requestCampaignsQuery(query);
        this.props.router.push('/search');
        $input.val("");
      });
      $container.addClass('selected-input');
      $input.css('width', '18em');
      $input.keydown( (e) => {
        if (e.which == 13) {
          e.stopPropagation();
          e.preventDefault();
          let query = $input.val();
          if (query === "") { return; }
          // send query
          this.props.requestCampaignsQuery(query);
          this.props.router.push('/search');
          $input.val("");
        }
      });
      $input.focusout( () => {
        $container.removeClass('selected-input');
        $input.val("").css('width', '12em');
      });
    });
  }

  mobileSearchListener() {
    let $menu = $('.siteHeader');
    let $mobileSearch = $('.search-symbol');
    $menu.toggleClass('search-input-active');
    if ($menu.hasClass('search-input-active')) {
      $mobileSearch.fadeIn(200).find('input').focus();
    } else {
      $mobileSearch.fadeOut(0).find('input').focus();
    }

  }

  openMenu(e) {
    e.preventDefault();
    let menuOpen = !this.state.menuOpen;
    this.setState({menuOpen});
  }

  closeMenu(e) {
    e.preventDefault();
    this.setState({menuOpen: false});
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
    const menuClass = (this.state.menuOpen) ? "open" : "closed";
    return(
      <header>
        <div id="main-menu" className="siteHeader parent mobileHeader">
          <ul className="mobileHeader">
            <li>
              <h1 className="siteLogo mobileLogo" onClick={this.redirectHome}>StartupGoGo
                <a href="#" className="clickable" onClick={this.openMenu}>
                  <i className="fa fa-chevron-down toggle-menu" aria-hidden="true"></i>
                </a>
              </h1>
            </li>
            <li className="search-icon-item">
              <i className="fa fa-search mobile clickable mobile-icon"
                aria-hidden="true"
                onClick={this.mobileSearchListener}></i>
            </li>
            <li>
              <span className="search-symbol desktop">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input
                  className="search-input"
                  type="text"
                  value={this.state.query}
                  onChange={this.update('query')}/>
              </span>
            </li>
          </ul>
          <ul id="mobileMenu" className={menuClass} onClick={this.closeMenu}>
            <li className="pitchButton">
              <a href="#" className="siteHeader-button button"
               onClick={this.linkToPitch}>Pitch A Startup</a>
            </li>
            <li>
              <UserMenu
              processForm={this.props.processForm}
              logout={this.props.logout}
              currentUser={this.props.currentUser}
              loggedIn={this.props.loggedIn}
              receiveSessionErrors={this.props.receiveSessionErrors}
              errors={this.props.errors}
              campaigns={this.props.campaigns}
              campaign={this.props.campaign}
              router={this.props.router}
              requestUserCampaigns={this.props.requestUserCampaigns}
              requestSingleCampaign={this.props.requestSingleCampaign}
              requestCampaigns={this.props.requestCampaigns}
              modalIsOpen={this.state.modalIsOpen}
              redirect={this.state.redirect}
              resetRedirect={this.resetRedirect}
              router={this.props.router}
              formType={this.state.formType}
              mobileMenu={true}/>
            </li>
          </ul>
        </div>
        <div id="main-menu" className="siteHeader parent desktopHeader">
          <div className="siteHeader-content-left">
            <h1 className="siteLogo" onClick={this.redirectHome}>StartupGoGo</h1>
            <ul className="desktop-menu">
              <li>
                <i className="fa fa-search mobile clickable mobile-icon"
                  aria-hidden="true"
                  onClick={this.mobileSearchListener}></i>
              </li>
              <li>
                <span className="search-symbol desktop">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <input
                    className="search-input"
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
              campaign={this.props.campaign}
              router={this.props.router}
              requestUserCampaigns={this.props.requestUserCampaigns}
              requestSingleCampaign={this.props.requestSingleCampaign}
              requestCampaigns={this.props.requestCampaigns}
              modalIsOpen={this.state.modalIsOpen}
              redirect={this.state.redirect}
              resetRedirect={this.resetRedirect}
              router={this.props.router}
              formType={this.state.formType}
              mobileMenu={false}/>
          </div>
        </div>
      </header>
    )
  }

}

export default withRouter(Header);
