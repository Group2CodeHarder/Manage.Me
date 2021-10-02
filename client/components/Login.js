import React from "react";
import { connect } from "react-redux";
// import { authenticate } from "../store";

const Login = (props) => {
  return (
    <div className="login-wrapper">
      <div className="content-wrapper" id="login-page-wrapper">
        <div id="login-container">
          <br />
          <br />
          <h1>Make every day your masterpiece.</h1>
          <br />
          <h3>We help you focus on being productive instead of busy</h3>
          <br />
          <br />
          <h4>Access via Google</h4>
          <br />
          <div>
            <a href="/auth/google/">
              <img class="resize" src="/google_signin.png" id="google-signin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();

      // dispatch(authenticate(username, password, formName));
    },
  };
};

export default connect(mapLogin, mapDispatch)(Login);
