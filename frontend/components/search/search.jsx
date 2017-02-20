import React from 'react';
import { Router, Route, hashHistory, withRouter } from 'react-router';

import QueriedCampaignIndex from '../campaign_index/queried_campaign_index';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      queryString: "",
      imagesLoaded: false
    }

    this.numImagesLoaded = 0;
    this.totalImages = Number.MAX_INT;
    this.update = this.update.bind(this);
    this.updateLoadedImages = this.updateLoadedImages.bind(this);
    this.searchListener = this.searchListener.bind(this);
  }

  componentDidMount() {
    // set main search input to header search inquiry
    this.setState({query: this.props.queryString, initialLoad: true});
    // set total image amount
    if (this.props.queriedCampaigns) {
      this.totalImages = Object.keys(this.props.queriedCampaigns).length;
    } else {
      this.setState({totalImages: 0});
    }
    // add search listener
    this.searchListener();

    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    // set total image amount
    if (nextProps.queriedCampaigns) {
      this.totalImages = Object.keys(nextProps.queriedCampaigns).length;
    }
    // update query string on submit new query
    if (this.props.queryString !== nextProps.queryString) {
      this.setState({queryString: nextProps.queryString,
                     query: nextProps.queryString,
                     imagesLoaded: false});
    }
  }

  componentDidUpdate() {
    if (this.state.queryString === "" && this.props.queryString !== "") {
      this.setState({queryString: this.props.queryString});
    }
    // Set images loaded to true if all images loaded
    if (this.numImagesLoaded >= (this.totalImages * 2) &&
    !this.state.imagesLoaded) {
      this.setState({imagesLoaded: true});
      this.numImagesLoaded = 0;
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

  updateLoadedImages() {
    let numImagesLoaded = this.numImagesLoaded + 1;
    this.numImagesLoaded = numImagesLoaded;
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
              className="search-input"
              type="text"
              value={this.state.query}
              onChange={this.update('query')}/>
          </span>
          <div className="campaign-index-container">
            <QueriedCampaignIndex campaigns={this.props.queriedCampaigns}
                                  queryString={this.props.queryString}
                                  updateLoadedImages={this.updateLoadedImages} />
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Search);
