import React from 'react';
import Flickity from 'flickity';

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.featuredCampaigns && this.state != nextProps.featuredCampaigns) {
      this.setState(nextProps.featuredCampaigns);
    }
  }

  componentDidMount() {
    this.props.requestFeaturedCampaigns();

    let flkty = new Flickity( '.main-gallery', {
      // options
      cellAlign: 'center',
      initialIndex: 1,
      wrapAround: true,
      autoPlay: 5000,
      selectedAttraction: 0.15,
      friction: 0.8,
      prevNextButtons: false,
      pageDots: false,
    });

    $('.gallery-cell').each(function() {
      let $cell = $(this);
      let newWidth = $cell.width();
      $cell.width(newWidth);
    });

    // this.forceUpdate();
  }

  render() {
    const campaignSlides = () => {
      if (!this.state.empty) {
        let keys = Object.keys(this.state);
        let campaigns = keys.map( (key) => (
          this.state[key]
        ));
        return campaigns;
      } else {
        return [];
      }
    }

    return (
      <div className="main-gallery">
        {campaignSlides().map( (campaign, i) => {
          let imgUrl = campaign.pitch_image_url;
          let divStyle = {
            backgroundImage: 'url(' + imgUrl + ')'
          }
          return(
            <div key={i}
              className='gallery-cell'
              style={divStyle}>
              <div className='gallery-overlay'>
              </div>
              <h3>{campaign.title}</h3>
              <p>{campaign.tagline}</p>
            </div>
          );
        })}

      </div>
    );

  }
}

export default SimpleSlider
