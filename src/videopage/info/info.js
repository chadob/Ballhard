import React from 'react';

export class Info extends React.Component {
  render() {
    if (this.props.video) {
      return (
        <div className="info" style={{}}>
        <div className="info-left">
        <div className="info-title">
        <h5> {this.props.video.section} </h5>
        <h1> {this.props.video.title} </h1>
        </div>
        <div className="rating-container">
        {
          (this.props.userId) ? (
            <div className="favorite-container" onClick={(e) => {this.props.toggleFavorite()}}>
            <p>
            {
              this.props.favorite ? "Remove from Favorites" : "Add to favorites"
            }
            </p>
            </div>
          ) : null
        }
        <div className="overall-rating-stars">
        <p> Overall Rating: </p>
        {this.props.stars.map((star, index) =>
          star
        )}
        </div>
        {
          (this.props.userId) ? (
            <div className= "your-rating-stars">
            <p> Your Rating: </p>
            {this.props.rateStars.map((star, index) =>
              star
            )}
            </div>
          ) : null
        }
        </div>
        </div>
        <div className="author-container">
        <img src={require("../../Assets/" + this.props.video.authorPic + ".jpg")} />
        <p> {this.props.video.author} </p>
        </div>
        <div className="description-container">
        <p> {this.props.video.description} </p>
        </div>
        </div>
      );
    }

    }
}
