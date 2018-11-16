import React from 'react';
import { Link } from "react-router-dom";
export class Explore extends React.Component {
  render() {
    return (
      <div className="explore section" style={{}}>
        <div className="section-title">
          <h1> Explore BallHard</h1>
        </div>
        <div className="explore-links-container">
          {this.props.sectionsArray.map((section, index) =>
            <div className="explore-link-container">
              <Link to={"/search/type/" + section.title.toLowerCase()} onClick={(e) => {
                this.props.searchByType(section.title)
              }}>
                <div className="explore-img-container">
                  <img src={section.src} />
                </div>
                <div className="explore-title-div">
                  <span> {section.title} </span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}
