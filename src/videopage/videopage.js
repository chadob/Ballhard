import React from 'react';
import VideoContainer from './video/videoContainer';
import InfoContainer from './info/infoContainer';
import CommentsContainer from './comments/commentsContainer';

export class Videopage extends React.Component {
  render() {
    return (
      <div className="videopage" style={{}}>
        <VideoContainer />
        <InfoContainer />
        <CommentsContainer />
      </div>
    );
  }
}
