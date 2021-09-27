import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import CalendarComponent from "./components/Calendar";
import Home from "./components/Home";
import Finance from "./components/Finance";
import Projects from "./components/Projects";
import Profile from "./components/Profile";

import { getProjects } from './store/projects';
import { getEvents } from "./store/calendar";
import { getUser } from "./store/auth";

class Routes extends Component {
  async componentDidMount() {
   await this.props.getUser();
    if (this.props.auth.id) {
      this.props.getEvents();
      this.props.getProjects(this.props.auth.id);
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path= '/home' component={Home} />
            <Route
              path= '/calendar'
              render={() => (
                <CalendarComponent calEvents={this.props.events.items} />
              )}
            />
            <Route path= '/profile' component={Profile} />
            <Route path= '/projects' component={Projects} />
            <Route path= '/finance' component={Finance} />
            <Route exact path= '/checkout' component={Checkout} />
            {/* <Redirect to= '/home' /> */}
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
    isLoggedIn: !!state.auth.id,
    events: state.events,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    getEvents: () => dispatch(getEvents()),
    getProjects: (userId) => dispatch(getProjects(userId))
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));
