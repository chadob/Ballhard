import React from 'react';
import './slideshow.css'
import { Slideshow } from './slideshow';
import { nextImg } from "../../actions";
import { connect } from 'react-redux';

class SlideshowContainer extends React.Component {
  render() {
    return (
      <Slideshow currentPicture={this.props.currentImg.src} cycleArray={this.imgList}/>
    );
  }
}
function mapStateToProps ( state ) {
  return {
    i: state.banner.i,
    currentImg: state.data.imgList[state.banner.i],
    imgList: state.data.imgList
  }
}

export default connect(mapStateToProps)(SlideshowContainer)
