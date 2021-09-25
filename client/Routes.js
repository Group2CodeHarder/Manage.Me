import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import CalendarComponent from "./components/Calendar";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { getEvents } from "./store/calendar";
import { getUser } from "./store/auth";

class Routes extends Component {
  componentDidMount() {
    this.props.getUser();
    if (this.props.auth) {
      this.props.getEvents();
    }
  }

  render() {
    const { isLoggedIn, userType, events, checked } = this.props;
    //console.log(events.items);
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            {/* <Route path="/home" component={Home} />
            <Route path="/calendar" component={CalendarComponent} exact />
            <Route exact path="/checkout" component={Checkout} />
            <Redirect to="/home" /> */}
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/home" component={Home} isAuth={true} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/calendar"
              isAuth={true}
              render={() => (
                <CalendarComponent calEvents={this.props.events.items} />
              )}
            />
          </Switch>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
    checked: !!state.auth.id,
    userType: state.auth.userType,
    events: state.events,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    getEvents: () => dispatch(getEvents()),
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
