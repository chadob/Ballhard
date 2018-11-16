import React from 'react';
import './comments.css'
import { Comments } from './comments';
import { addComment } from "../../actions";
import { connect } from 'react-redux';

class CommentsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      commentToBeAdded: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }
  addComment(txt) {
    let timePosted = new Date();
    let stringDate = timePosted.getMonth() + '/' + timePosted.getDate() + '/' + timePosted.getFullYear();
    let newComment = {author: this.props.username, date: stringDate, video: this.props.videoId, src: this.props.userPicture, comment: txt};
    console.log(this.props.videoId)
    this.props.addComment(newComment);
    this.setState({commentToBeAdded: ""});
  }
  handleChange(event) {
     this.setState({commentToBeAdded: event.target.value});
  }
  render() {
    return (
      <Comments userPicture={this.props.userPicture} commentToBeAdded={this.state.commentToBeAdded} comments={this.props.comments} handleChange={this.handleChange} addComment={this.addComment}/>
    );
  }
}
function mapStateToProps ( state ) {
  return {
    comments: state.data.video.comments,
    userPicture: state.data.user && state.data.user.picture,
    userId: state.data.user && state.data.user._id,
    username: state.data.user && state.data.user.username,
    videoId: state.data.video._id
  }
}
const mapDispatchToProps = dispatch => ({
  addComment: (comment) => dispatch(addComment(comment)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
