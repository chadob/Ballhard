import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class DisplaySearch extends React.Component {
  render() {
    return (
      <div className="display-search section">
        <div className="section-title">
          <h1> {this.props.title} </h1>
          { !this.props.searchDone &&
            <h3> {this.props.amount !== 1 ? "Showing " + this.props.amount + " Videos" : "Showing " + this.props.amount + " Video"} </h3>
          }
        </div>
        <div className="display-search-videos-container">
          {this.props.search[this.props.title].map((video, index) =>
            <Link to={"/video/" + video._id} onClick={this.props.fetchVideo(video._id)}>
              <div className="video-thumbnail">
                <img src={"https://img.youtube.com/vi" + video.url.substring(29,) +"/0.jpg"} />
              </div>
              <h5 className="video-title"> {video.title} </h5>
              <h6 className="video-author"> {video.author} </h6>
            </Link>
          )}
        </div>
        {this.props.searchDone &&
          <div className="show-search">
            <Link
            to={"/search/preset/" + this.props.title.toLowerCase()}
            onClick={(e) => {
              this.props.searchByPreset(this.props.title, this.props.search)
            }}>
            Show all
            </Link>
          </div>
        }
      </div>
    );
  }
}
