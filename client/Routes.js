import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import CalendarComponent from "./components/Calendar";
import Home from "./components/Home";
import Finance from "./components/Finance";
import Projects from "./components/Projects";
import ProjectSingle from "./components/ProjectSingle";
import ProjectCreate from "./components/ProjectCreate";
import ProjectSingleClient from "./components/ProjectSingleClient";
import ProjectSingleEdit from "./components/ProjectSingleEdit";
import Profile from "./components/Profile";
import TaskBoard from "./components/TaskBoard";
import StripeCheckout from "./components/StripeCheckout";
import EditProfileBio from "./components/EditProfileBio";
import ProfileClientView from "./components/ProfileClientView";
import { getProjects } from "./store/projects";
import { getEvents } from "./store/calendar";
import { getUser } from "./store/auth";
import BigCal from "./components/BigCal";

class Routes extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.auth.id !== this.props.auth.id) {
      await this.props.getUser();
      if (this.props.auth.id) {
        this.props.getEvents();
        this.props.getProjects(this.props.auth.id);
      }
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route
              path="/calendar"
              render={() => <BigCal calEvents={this.props.events.items} />}
            />
            <Route exact path="/profile" component={Profile} />
            <Route path="/editBio" component={EditProfileBio} />
            {/* <Route path="/profile/:id" component={ProfileClientView} /> */}
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/create" component={ProjectCreate} />
            <Route path="/projects/edit/:id" component={ProjectSingleEdit} />
            {/* <Route path="/projects/client/:id" component={ProjectSingleClient} /> */}
            <Route path="/projects/:id" component={ProjectSingle} />
            <Route exact path="/boards" component={TaskBoard} />
            <Route path="/finance" component={Finance} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/profile/:id" component={ProfileClientView} />
            <Route
              path="/projects/client/:id"
              component={ProjectSingleClient}
            />
            <Route path="/checkout/success=true" component={StripeCheckout} />
            <Route path="/checkout/canceled=true" component={StripeCheckout} />
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
    getProjects: (userId) => dispatch(getProjects(userId)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));
