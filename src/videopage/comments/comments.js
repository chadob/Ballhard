import React from 'react';

export class Comments extends React.Component {
  render() {
    return (
      <div className="comments" style={{}}>
        <h1> {this.props.comments ? this.props.comments.length : 0} Comments </h1>
        { this.props.userPicture &&
          <div className="add-comment-container">
            <div className="picture-container">
              <img src={require("../../Assets/" + this.props.userPicture  + ".jpg")} />
            </div>
            <input value={this.props.commentToBeAdded} onChange={this.props.handleChange} placeholder="Add a comment..."></input>
            <button onClick={() => this.props.addComment(this.props.commentToBeAdded)}> Add </button>
          </div>
        }
        {this.props.comments && this.props.comments.length > 0 && this.props.comments.map((comment, idx) =>
          <div className="comment">
            <div className="comment-header">
              <div className="picture-container">
                <img src={require("../../Assets/" + comment.src + ".jpg")} />
              </div>
              <div className="comment-info">
                <h5> {comment.author} </h5>
                <h6> {comment.date} </h6>
              </div>
            </div>
            <div className="comment-text">
              <p> {comment.comment} </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
