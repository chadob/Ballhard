import React from 'react';
import './navbar.css'
import { Navbar } from './navbar';
import { toggleSignIn, toggleSignUp, signIn, signOut } from '../actions';
import { connect } from 'react-redux';

class NavbarContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      logoImg: "",
      linksArray: [{href: "/dunking", title: "Dunking"}, {href: "/shooting", title: "Shooting"}, {href: "/dribbling", title: "Dribbling"}],
      currentPage: "dunking",
      smallNav: "hidden"
    };
    this.signOut = this.signOut.bind(this);
    this.toggleSmallNav = this.toggleSmallNav.bind(this);
  }
  signOut() {
    this.toggleSmallNav();
    this.props.signOut();
  }
  toggleSmallNav() {
    this.state.smallNav === "hidden" ? this.setState({"smallNav": "shown"}) : this.setState({"smallNav": "hidden"})
  }
  render() {
    return (
      <Navbar
        signInWindow={this.props.signInWindow}
        signUpWindow={this.props.signUpWindow}
        toggleSignIn={this.props.toggleSignIn}
        toggleSignUp={this.props.toggleSignUp}
        username={this.props.username}
        userPicture={this.props.userPicture}
        loggedIn={this.props.loggedIn}
        smallNav={this.state.smallNav}
        toggleSmallNav={this.toggleSmallNav}
        currentPage={this.state.currentPage}
        logoImg={this.state.logoImg}
        linksArray={this.state.linksArray}
        signOut={this.signOut}
      />
    );
  }
}
function mapStateToProps ( state ) {
  console.log(state)
  return {
    signUpWindow: state.data.signUpWindow,
    signInWindow: state.data.signInWindow,
    loggedIn: state.data.loggedIn,
    username: state.data.user && state.data.user.username,
    userPicture: state.data.user && state.data.user.picture,
  }
}
const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  toggleSignIn: (status) => dispatch(toggleSignIn(status)),
  toggleSignUp: (status) => dispatch(toggleSignUp(status)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
