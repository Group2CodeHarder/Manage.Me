import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/auth";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>Manage.me</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}

          <Link to="/checkout">Payment(Test)</Link>
          <Link to="/calendar">Calendar(Test)</Link>
          <button className="google Signin">
            <a href="/auth/google/logout" onClick={handleClick}>
              Logout
            </a>
          </button>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
