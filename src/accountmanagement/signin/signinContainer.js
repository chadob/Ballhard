import React from 'react';
import './signin.css'
import { Signin } from './signin';
import { toggleSignIn, toggleSignUp, fetchUserForSignIn } from "../../actions";
import { connect } from 'react-redux';

class SigninContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePassword: true,
      rememberMe: false,
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.signIn = this.signIn.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.toggleError = this.toggleError.bind(this);
    this.rememberLogin = this.rememberLogin.bind(this);
  }
  onChange(e, input) {
    this.setState({[input]: e.target.value})
  }
  signIn(username, password) {
    this.props.fetchUserForSignIn(username, password);
  }
  toggleHidden() {
    this.setState({hidePassword: this.state.hidePassword === true ? false : true});
  }
  toggleError() {
    this.setState({errror: this.state.error === true ? false : true})
  }
  rememberLogin(e) {
    this.setState({"rememberMe": e.target.checked});
  }
  componentDidUpdate(prevProps) {
    if (this.props.errorOnSignIn === false && this.props.errorOnSignIn !== prevProps.errorOnSignIn) {
      this.props.toggleSignIn(this.props.errorOnSignIn)
    }
  }
  render() {
    return (
        <Signin
          rememberMe={this.state.rememberMe}
          hidePassword={this.state.hidePassword}
          username={this.state.username}
          password={this.state.password}
          error={this.props.errorOnSignIn}
          onChange={this.onChange}
          signIn={this.signIn}
          toggleHidden={this.toggleHidden}
          rememberLogin={this.rememberLogin}
          signInWindow={this.props.signInWindow}
          signUpWindow={this.props.signUpWindow}
          toggleSignIn={this.props.toggleSignIn}
          toggleSignUp={this.props.toggleSignUp}
        />
    );
  }
}

function mapStateToProps ( state ) {
  return {
    signInWindow: state.data.signInWindow,
    signUpWindow: state.data.signUpWindow,
    errorOnSignIn: state.data.errorOnSignIn
  }
}
const mapDispatchToProps = dispatch => ({
  toggleSignIn: (status) => dispatch(toggleSignIn(status)),
  toggleSignUp: (status) => dispatch(toggleSignUp(status)),
  fetchUserForSignIn: (username, password) => dispatch(fetchUserForSignIn(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer)
