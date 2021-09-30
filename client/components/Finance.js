import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LineChart from "./LineChart";
import FinancialProjectList from "./FinancialProjectList";
import Profit from "./Profit";

export const Finance = (props) => {
  const { projects } = props;
  return (
    <div className="content-wrapper">
      <div>
        <h3>Finance Dashboard</h3>
        <Link to="/checkout">Payment Link</Link>
        <div className="profit-table">
          <Profit project={projects} />
        </div>
        <div className="financeChart">
          <LineChart project={projects} />
        </div>
        <div id="financialprojectlist">
          <div id="project-list-item">
            <h4>Project Name</h4>
            <h4>Project Completion Month</h4>
            <h4>Project Status</h4>
            <h4>Project Revenue</h4>
            <h4>Project Expense</h4>
            <h4>Project Profit</h4>
          </div>
          {projects.map((project) => {
            return <FinancialProjectList project={project} key={project.id} />;
          })}
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
