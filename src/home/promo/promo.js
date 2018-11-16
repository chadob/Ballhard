import React from 'react';

export class Promo extends React.Component {
  render() {
    return (
      <div className="promo section">
        <div className="section-title">
          <h1> {this.props.title} </h1>
          <h3> {this.props.subtitle} </h3>
        </div>
        <a href={this.props.href}>
          <div className="promo-banner" style={{backgroundImage: "url(" + this.props.src +")"}}>
            <button className="promo-button">
              {this.props.button}
            </button>
          </div>
        </a>
      </div>
    );
  }
}
