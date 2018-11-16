import React from 'react';
import './videopage.css'
import { Videopage } from './videopage';
import { connect } from 'react-redux';

class VideoPageContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Videopage />
    );
  }
}
function mapStateToProps ( state ) {
  return {
    userId: state.data.userId,
    videoId: state.data.video.videoId
  }
}

export default connect(mapStateToProps)(VideoPageContainer)
