import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LineChart from "./LineChart";
import FinancialProjectList from "./FinancialProjectList";
import Profit from "./Profit";
import moment from "moment";

export const Finance = (props) => {
  const { projects } = props;
  const monthMinusOneName = moment()
    .subtract(1, "month")
    .startOf("month")
    .format("MMMM");

  return (
    <div className="content-wrapper">
      <h2>Finance Dashboard</h2>
      <div className="finance-dashboard-container">
        <div className="finance-dashboard-top">
          <div className="finance-dashboard-left">
            <div className="financeChart">
              <LineChart project={projects} />
            </div>
          </div>

          <div className="finance-dashboard-right ">
            <div className="profit-table">
              <Profit project={projects} />
            </div>
          </div>
        </div>
        <div className="finance-dashboard-bottom-wrapper">
          <div className="finance-dashboard-bottom">
            <div className="finance-dashboard-title">
              <div className="finance-project-title">
                <h3>
                  Recently Completed Projects (as of end of {monthMinusOneName})
                </h3>
              </div>
              <div className="finance-project-list-item">
                <h4>Project Name</h4>
                {/* <h4>Project Completion Month</h4> */}
                {/* <h4>Project Status</h4> */}
                <h4>Project Revenue</h4>
                <h4>Project Expense</h4>
                <h4>Project Profit</h4>
              </div>
            </div>
            <div className="finance-dashboard-projectList">
              {projects.map((project) => {
                return (
                  <FinancialProjectList project={project} key={project.id} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    state,
    projects: state.projects || [],
  };
};

export default connect(mapState)(Finance);
