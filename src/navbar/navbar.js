import React from 'react';
import SearchContainer from '../home/search/searchContainer';
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
  render() {
    return (
      <div className={this.props.currentPage !== "" ? "altNavbar navbar" : "navbar"} style={{}}>
        <div className="top-nav">
          {this.props.userPicture &&
            <div className="picture-container">
              <Link to={"/"}>
                <img src={require("../Assets/" + this.props.userPicture  + ".jpg")} />
              </Link>
            </div>
          }
          <div className={"toggled-nav-toggle toggler-" + this.props.smallNav} onClick={this.props.toggleSmallNav}>
            <span> ^ </span>
            <img src={this.props.userPicture ? require("../Assets/" + this.props.userPicture  + ".jpg") : require("../Assets/" + "contemplation_center"  + ".jpg") } />
          </div>
          <SearchContainer parent="navbar"/>
          {
            (this.props.loggedIn) ? (
              <div className="navbar-links">
                <span> Welcome {this.props.username} </span>
                <a href="#" onClick={(e) => this.props.signOut()}> Sign Out </a>
              </div>
            ) : (
              <div className="navbar-links">
                <a href="\\" onClick={(e) => this.props.toggleSignUp(!this.props.signUpWindow)}> Sign Up </a>
                <a href="\\" onClick={(e) => this.props.toggleSignIn(!this.props.signInWindow)}> Sign In </a>
              </div>
            )
          }
        </div>

        <div className={"toggled-nav toggled-nav-" + this.props.smallNav}>
          {
            (this.props.loggedIn) ? (
              <div className="toggled-nav-links">
                <Link to={'/'}> Home </Link>
                <a href="\\" onClick={(e) => this.props.signOut()}> Sign Out </a>
              </div>
            ) : (
              <div className="toggled-nav-links">
                <Link to={'/'}> Home </Link>
                <a href="\\" onClick={(e) => this.props.toggleSignUp(!this.props.signUpWindow)}> Sign Up </a>
                <a href="\\" onClick={(e) => this.props.toggleSignIn(!this.props.signInWindow)}> Sign In </a>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
