import React, { Component } from 'react';
import './App.css';
import './Fonts/fonts.css';
import NavbarContainer from './navbar/navbarContainer';
import SigninContainer from './accountmanagement/signin/signinContainer';
import SignupContainer from './accountmanagement/signup/signupContainer';
import BannerContainer from './home/banner/bannerContainer';
import MainContentContainer from './home/mainContent/mainContentContainer';
import VideoPageContainer from './videopage/videopageContainer';
import { toggleSignIn, toggleSignUp, fetchUserForSignIn, fetchLists } from "./actions";
import { connect } from 'react-redux';
import routes from './routes';

class App extends Component {
  componentWillMount() {
    this.props.fetchUserForSignIn('guest', 'password');
    this.props.fetchLists();
  }
  render() {
    return (
      <div className="App">
        {(this.props.signUpWindow) ? <SignupContainer /> : null}
        {(this.props.signInWindow) ? <SigninContainer /> : null}
        { routes }
      </div>
    );
  }
}
function mapStateToProps ( state ) {
  return {
    loggedIn: state.data.loggedIn,
    signUpWindow: state.data.signUpWindow,
    signInWindow: state.data.signInWindow,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchUserForSignIn: (username, password) => dispatch(fetchUserForSignIn(username, password)),
  fetchLists: id => dispatch(fetchLists(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
