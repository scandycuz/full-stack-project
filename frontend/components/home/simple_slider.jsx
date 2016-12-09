import React from 'react';
import Flickity from 'flickity';

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);

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

    return (
      <div className="main-gallery">
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
      </div>
    );

  }
}

export default SimpleSlider
