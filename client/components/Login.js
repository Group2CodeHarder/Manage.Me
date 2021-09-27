import React from "react";
import { connect } from "react-redux";
// import { authenticate } from "../store";


const Login = (props) => {
  return (
    <div className='content-wrapper'>
      <div id= 'login-container'> 
            <h4>Use Google to access Manage.me</h4>
            <div>
            <a href='/auth/google/'>
              <img src= '/google_signin.png' id='google-signin'/>
            </a>
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
