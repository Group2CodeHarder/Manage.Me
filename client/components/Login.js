import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";


const AuthForm = (props) => {
  return (
    <div>
      <div> 
          <button className="google Signin" onClick= { authenticate }>
            <a href='/auth/google/'>Log in with Google</a>
          </button>

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

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
