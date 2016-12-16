import React from 'react';
import { Router, Route, hashHistory, withRouter } from 'react-router';

import QueriedCampaignIndex from '../campaign_index/queried_campaign_index';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      queryString: "",
      initialLoad: true,
      totalImages: null,
      numImagesLoaded: 0,
      imagesLoaded: false
    }

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleLoadingComplete = this.handleLoadingComplete.bind(this);
    this.update = this.update.bind(this);
    this.searchListener = this.searchListener.bind(this);
  }

  componentDidMount() {
    // set total image amount
    if (this.props.queriedCampaigns) {
      this.setState({totalImages: Object.keys(this.props.queriedCampaigns).length});
    }
    // set main search input to header search inquiry
    this.setState({query: this.props.queryString});
    // add search listener
    this.searchListener();

    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    // set total image amount
    if (nextProps.queriedCampaigns) {
      this.setState({totalImages: Object.keys(nextProps.queriedCampaigns).length});
    }
    // update query string on submit new query
    if (this.props.queryString !== nextProps.queryString) {
      this.setState({queryString: nextProps.queryString, query: nextProps.queryString});
    }
  }

  componentDidUpdate() {
    if (this.state.queryString === "" && this.props.queryString !== "") {
      this.setState({queryString: this.props.queryString});
    }
    // if loaded images number === total images, loading complete
    if (!this.state.imagesLoaded &&
        this.state.initialLoad &&
        this.state.numImagesLoaded >= this.state.totalImages &&
        typeof this.state.totalImages === "number") {
      this.handleLoadingComplete();
    }
  }

  searchListener() {
    $('.search-component-input-container input').focus( (e) => {
      let $input = $(e.target);
      let $container = $(e.target).closest('.search-component-input-container');
      let $icon = $(e.target).prev('i');
      $icon.click( (e) => {
        e.preventDefault();
        e.stopPropagation();
        let query = $input.val();
        if (query === "") { return; }
        // send query
        this.props.requestCampaignsQuery(query);
        this.props.router.push('/search');
      });
      $container.addClass('selected-input');
      $input.keydown( (e) => {
        if (e.which == 13) {
          e.stopPropagation();
          e.preventDefault();
          let query = $input.val();
          if (query === "") { return; }
          // send query
          this.props.requestCampaignsQuery(query);
        }
      });
      $input.focusout( () => {
        $container.removeClass('selected-input');
      });
    });
  }

  handleImageLoaded() {
    // increment loaded images number
    this.setState({numImagesLoaded: this.state.numImagesLoaded + 1});
  }

  handleLoadingComplete() {
    this.setState({imagesLoaded: true, initialLoad: false});
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {

    const loadingScreen = () => {
      if (this.props.loading.queriedCampaigns || !this.state.imagesLoaded) {
        return (
          <div id="loading-screen" className="loading">
            <div className="loader-container">
              <div className="loader">
                <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                  <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
              </div>
            </div>
          </div>
        )
      }
    }

    const queryHeader = () => {
      if (this.state.queryString !== "") {
        return(
          <h4 className="search-header">Results for <span className="query-display">{this.state.queryString}</span></h4>
        );
      } else {
        return(
          <h4 className="search-header">Enter a search query:</h4>
        );
      }
    }

    return(
      <div className="home-content-full">
        {loadingScreen()}
        <div className="home-content-container container">
          {queryHeader()}
          <span className="search-component-input-container">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="text"
              value={this.state.query}
              onChange={this.update('query')}/>
          </span>
          <div className="campaign-index-container">
            <QueriedCampaignIndex campaigns={this.props.queriedCampaigns}
                                  queryString={this.props.queryString}
                                  handleImageLoaded={this.handleImageLoaded} />
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Search);
