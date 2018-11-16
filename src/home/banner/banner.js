import React from 'react';
import SearchContainer from '../search/searchContainer';
import SlideshowContainer from '../slideshow/slideshowContainer';
import NavbarContainer from '../../navbar/navbarContainer';
export class Banner extends React.Component {
  render() {
    return (
      <div className="banner" style={{}}>
        <SlideshowContainer />
        <div className="banner-items">
          <p className="banner-title"> Find a video to up your game.</p>
          <SearchContainer parent="banner"/>
        </div>
        <div className="fact-lower-right">
          <span> {this.props.currentFact} </span>
        </div>
      </div>
    );
  }
}
