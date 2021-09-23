import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Checkout from "./components/Checkout";
import { Login } from "./components/Login";
import CalendarComponent from "./components/Calendar";
import Home from "./components/Home";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/calendar" component={CalendarComponent} exact />
            <Route exact path="/checkout" component={Checkout} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/checkout" component={Checkout} />
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/calendar" component={CalendarComponent} exact />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {},
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
