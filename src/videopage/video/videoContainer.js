import React from 'react';
import './video.css'
import { Video } from './video';
import { connect } from 'react-redux';

class VideoContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Video url={this.props.url}/>
    );
  }
}
function mapStateToProps ( state ) {
  return {
    url: state.data.video.url
  }
}
export default connect(mapStateToProps)(VideoContainer)
