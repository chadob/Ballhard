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
    console.log(this.state)
  }
  signUp(username, password) {
    console.log(username, password)
    this.props.signUp(username, password);
    this.props.toggleSignUp();
  }
  render() {
    console.log(this.state.password)
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
  signUp: (userId) => dispatch(signUp(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
