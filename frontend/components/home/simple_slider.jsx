import React from 'react';
import Flickity from 'flickity';
import BgLazyLoad from 'flickity-bg-lazyload';

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredCampaigns: {},
      selectedIndex: null
    }
  }

  componentWillReceiveProps(nextProps) {
    const createCarousel = () => {
      this.flkty = new Flickity( '.main-gallery', {
        // options
        cellAlign: 'center',
        initialIndex: 0,
        wrapAround: true,
        autoPlay: 10000,
        selectedAttraction: 0.075,
        friction: 0.8,
        prevNextButtons: false,
        pageDots: false,
        bgLazyLoad: true,
        bgLazyLoad: 3,
        draggable: true
      });

      this.flkty.reposition();
      this.flkty.resize();

      this.flkty.on( 'staticClick', ( event, pointer, cellElement, cellIndex ) => {
        if (event.target.className === "clickable button") {
          event.preventDefault();
          $(event.target).click();
        } else {
          this.flkty.select(cellIndex);
        }
      });

      this.flkty.on( 'select', () => this.setState({selectedIndex: this.flkty.selectedIndex}));
    }

    if (nextProps.featuredCampaigns && this.state.featuredCampaigns != nextProps.featuredCampaigns) {
      this.setState({featuredCampaigns: nextProps.featuredCampaigns}, createCarousel);
    }
  }

  componentDidMount() {
    this.props.requestFeaturedCampaigns();
    this.setState({selectedIndex: 0}, () => $('.slide-content').animate({opacity: "1"}, 300));
  }

  componentDidUpdate() {
    let selectedIndex = null;
    if (this.flkty) {
      selectedIndex = this.flkty.selectedIndex;
    }
    if (selectedIndex && this.state.selectedIndex !== selectedIndex) {
      this.setState({selectedIndex});
    }

    $('.slide-content').animate({opacity: "1"}, 300);
  }

  render() {
    const goToCampaign = (campaignId) => {
      this.props.router.push(`/campaigns/${campaignId}`);
    }

    const slideContent = (campaign, slideIndex) => {
      if (slideIndex === this.state.selectedIndex) {
        return(
          <div className="slide-content">
            <h3>{campaign.title}</h3>
            <div className="slide-subcontent">
              <p>{campaign.tagline}</p>
              <span className="clickable button" onClick={() => goToCampaign(campaign.id)}>View Pitch</span>
            </div>
          </div>
        );
      }
    }

    const campaignSlides = () => {
      if (!this.state.featuredCampaigns.empty) {
        let keys = Object.keys(this.state.featuredCampaigns);
        let campaigns = keys.map( (key) => (
          this.state.featuredCampaigns[key]
        ));
        return campaigns;
      } else {
        return [];
      }
    }

    const slides = (offset) => {
      return(
        campaignSlides().map( (campaign, i) => {
          let imgUrl = campaign.card_image_url;

          return(
            <div key={i}
              className='gallery-cell'
              data-flickity-bg-lazyload={imgUrl}>
              <div className='gallery-overlay'>
              </div>
              {slideContent(campaign, i + offset)}
            </div>
          );
        })
      )
    }

    return (
      <div className="main-gallery">
        {slides(0)}
        {slides(3)}
      </div>
    );

  }
}

export default SimpleSlider
