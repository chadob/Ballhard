import React from 'react';
export class Slideshow extends React.Component {
  render() {
    return (
      <div className="slideshow" style={{}}>
        <img src={require("../../Assets/" + this.props.currentPicture  + ".jpg")} />
        <div className="slideshow-cover">
        </div>
      </div>
    );
  }
}
