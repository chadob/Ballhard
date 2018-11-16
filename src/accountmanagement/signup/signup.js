import React from 'react';
export class Signup extends React.Component {
  render() {
    return (
      <div className="sign-up">
        <div className="sign-up-container">
          <div className="sign-up-exit" onClick={(e) => this.props.toggleSignUp(!this.props.signUpWindow)}>
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-label="Close"
              focusable="false"
              style={{
                height: "16px",
                width: "16px",
                display: "block",
                fill: "rgb(118, 118, 118)"
              }}
            >
              <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fill-rule="evenodd">
              </path>
            </svg>
          </div>
          <form>
            <div className="text-input">
              <input
                placeholder="Username"
                onChange={(e) => this.props.onChange(e, "username")}
              >
              </input>
            </div>
            <div className="text-input">
              <input
                placeholder="Password"
                onChange={(e) => this.props.onChange(e, "password")}
              >
              </input>
            </div>
            <button type="submit" onClick={(e) => this.props.signUp(this.props.username, this.props.password)}> Sign Up </button>
          </form>
          <div>
            <span> "Already have an account?"
              <a href="\\" onClick={(e) => {this.props.toggleSignUp(!this.props.signUpWindow); this.props.toggleSignIn(!this.props.signInWindow);}}>
                Sign In
              </a>
            </span>
          </div>
        </div>
        <div className="sign-up-background">
        </div>
      </div>
    );
  }
}
