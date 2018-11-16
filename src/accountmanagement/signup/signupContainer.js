import React from 'react';
import './signup.css'
import { Signup } from './signup';
import { toggleSignIn, toggleSignUp, signUp } from "../../actions";
import { connect } from 'react-redux';

class SignupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }
  onChange(e, input) {
    this.setState({[input]: e.target.value})
  }
  signUp(username, password) {
    this.props.signUp(username, password);
    this.props.toggleSignUp();
  }
  render() {
    return (
        <Signup
          onChange={this.onChange}
          username={this.state.username}
          password={this.state.password}
          signUp={this.props.signUp}
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
  }
}
const mapDispatchToProps = dispatch => ({
  toggleSignIn: (status) => dispatch(toggleSignIn(status)),
  toggleSignUp: (status) => dispatch(toggleSignUp(status)),
  signUp: (username, password) => dispatch(signUp(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
