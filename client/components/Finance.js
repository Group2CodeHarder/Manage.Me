import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

class Finance extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div>
          <h3>Finance Dashboard</h3>
          <Link to="/checkout">Payment(Test)</Link>
          <LineChart />
          {/* <BarChart /> */}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    state,
  };
};

export default connect(mapState)(Finance);
