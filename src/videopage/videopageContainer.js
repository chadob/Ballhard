import React from 'react';
import './videopage.css'
import { Videopage } from './videopage';
import { fetchVideo } from "../actions";
import { connect } from 'react-redux';

class VideoPageContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    if (!this.props.video){
      this.props.fetchVideo(this.props.match.params.id)
    }
  }
  render() {
    if (this.props.video) {
      return <Videopage />
    } else {
      return null;
    }
  }
}
function mapStateToProps ( state ) {
  return {
    userId: state.data.userId,
    video: state.data.video,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
});
export default connect(mapStateToProps, mapDispatchToProps)(VideoPageContainer)
