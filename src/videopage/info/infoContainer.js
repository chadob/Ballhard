import React from 'react';
import './info.css'
import { Info } from './info';
import { rateVideo, toggleFavorite } from "../../actions";
import { connect } from 'react-redux';

class InfoContainer extends React.Component {
  constructor (props) {
    super(props);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }
  createStarsArray(amount) {
    let arr = [];
    let video = this.props.video;
    for (var i = 1; i < amount; i++) {
      let curI = i;
      arr.push(
      <div
        id={"rateStar" + i}
        onMouseOver={(e) => this.hoverStars(e, curI)}
        onMouseOut={(e) => this.unHoverStars(e, curI)}
        onClick={(e) => this.clickStar(e, curI)}
        className={"star-container rate-star-container " + (curI <= this.props.rating && "rate-star-rated")}
        key={i}>
        <img src={require("../../Assets/star.png")} />
        <div className="star-filling" style={{}}>
        </div>
      </div>
      );
    }
    video.rateStars = arr;
  }
  hoverStars(e, num) {
    let children = e.target.parentNode.parentNode.childNodes;
    let filtered = [].filter.call(children, function(ele) {
      return ele.id[ele.id.length - 1] <= num
    });
    filtered.forEach(function(ele) {
      ele.classList.add("rate-star-active");
    });
  }
  unHoverStars(e, num) {
    let children = e.target.parentNode.parentNode.childNodes;
    let filtered = [].filter.call(children, function(ele) {
      return ele.id[ele.id.length - 1] <= num
    });
    filtered.forEach(function(ele) {
      ele.classList.remove("rate-star-active");
    });
  }
  clickStar(e, num) {
    let children = e.target.parentNode.parentNode.childNodes;
    let rejected = [];
    let filtered = [].filter.call(children, function(ele) {
      if (ele.id[ele.id.length - 1] > num) {
        rejected.push(ele);
      }
      return ele.id[ele.id.length - 1] <= num
    });
    filtered.forEach(function(ele) {
      ele.classList.add("rate-star-rated");
    });
    if (rejected.length > 0) {
      rejected.forEach(function(ele) {
        ele.classList.remove("rate-star-rated");
      });
    }
    this.props.rateVideo(num, this.props.video._id, this.props.userId)
  }
  toggleFavorite() {
    let newStatus = !this.props.favorite
    this.props.toggleFavorite(this.props.video._id, this.props.userId)
  }
  componentWillMount() {
    let stars = [];
    let video = this.props.video;
    let j;
    for (var i=this.props.video.rating; i > 0; i--) {
      if (i > 1 ) {
        j = 1;
      } else {
        j = i
      }
      stars.push(
        <div className="star-container">
          <img src={require("../../Assets/star.png")} />
          <div className="star-filling" style={{width: 20 * j + "px"}}>
          </div>
        </div>
      );
    }
    video.stars = stars;
    this.createStarsArray(6);
  }
  render() {
    return (
      <Info
        video={this.props.video}
        favorite={this.props.favorite}
        toggleFavorite={this.toggleFavorite}
        userId={this.props.userId}
      />
    );
  }
}
function mapStateToProps ( state ) {
  return {
    userId: state.data.user && state.data.user._id,
    video: state.data.video,
    rating: state.data.user && state.data.user.ratings && state.data.user.ratings[state.data.video._id],
    favorite: state.data.user && state.data.user.favoriteVideos && state.data.user.favoriteVideos.indexOf(state.data.video._id) > -1
  }
}
const mapDispatchToProps = dispatch => ({
  rateVideo: (id, videoId, userId) => dispatch(rateVideo(id, videoId, userId)),
  toggleFavorite: (status, videoId, userId) => dispatch(toggleFavorite(status, videoId, userId))
});
export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer)
