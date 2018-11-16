import React from 'react';

export class Video extends React.Component {
  render() {
    return (
      <div className="video" style={{}}>
        <iframe src={this.props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    );
  }
}
