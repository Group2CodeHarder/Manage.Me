import React, { useState } from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const { projects } = props;

  const revenue = () => {
    let data = {
      Jan: 0.0,
      Feb: 0.0,
      Mar: 0.0,
      Apr: 0.0,
      May: 0.0,
      Jun: 0.0,
      Jul: 0.0,
      Aug: 0.0,
      Sep: 0.0,
      Oct: 0.0,
      Nov: 0.0,
      Dec: 0.0,
    };
    if (projects.length) {
      let complete = projects.filter((proj) => proj.status === "Complete");
      for (let i = 0; i < complete.length; i++) {
        let month = complete[i].deadlineMonth;
        data[month] += Number(complete[i].revenue);
      }
      const today = new Date();
      const currMonth = today.getMonth() + 1;
      return Object.values(data).slice(0, currMonth);
    }
  };

  const cost = () => {
    let data = {
      Jan: 0.0,
      Feb: 0.0,
      Mar: 0.0,
      Apr: 0.0,
      May: 0.0,
      Jun: 0.0,
      Jul: 0.0,
      Aug: 0.0,
      Sep: 0.0,
      Oct: 0.0,
      Nov: 0.0,
      Dec: 0.0,
    };
    if (projects.length) {
      let complete = projects.filter((proj) => proj.status === "Complete");
      for (let i = 0; i < complete.length; i++) {
        let month = complete[i].deadlineMonth;
        data[month] += Number(complete[i].expense);
      }
      const today = new Date();
      const currMonth = today.getMonth() + 1;
      return Object.values(data).slice(0, currMonth);
    }
  };

  const profit = () => {
    let data = {
      Jan: 0.0,
      Feb: 0.0,
      Mar: 0.0,
      Apr: 0.0,
      May: 0.0,
      Jun: 0.0,
      Jul: 0.0,
      Aug: 0.0,
      Sep: 0.0,
      Oct: 0.0,
      Nov: 0.0,
      Dec: 0.0,
    };
    if (projects.length) {
      let complete = projects.filter((proj) => proj.status === "Complete");
      console.log("complete", complete);
      for (let i = 0; i < complete.length; i++) {
        let month = complete[i].deadlineMonth;
        data[month] +=
          Number(complete[i].revenue) - Number(complete[i].expense);
      }
      const today = new Date();
      const currMonth = today.getMonth() + 1;
      return Object.values(data).slice(0, currMonth);
    }
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Revenue",
        data: revenue(),
        fill: false,
        backgroundColor: "rgb(14, 36, 56)",
        borderColor: "rgba(14, 36, 56, 0.2)",
      },
      {
        label: "Total Cost",
        data: cost(),
        fill: false,
        backgroundColor: "rgb(255, 148, 94)",
        borderColor: "rgba(255, 148, 94, 0.2)",
      },
      {
        label: "Total Profit",
        data: profit(),
        fill: false,
        backgroundColor: "rgb(161, 177, 184)",
        borderColor: "rgba(161, 177, 184, 0.2)",
      },
    ],
  };

  return (
    <div>
      <div className="graphHeader">
        <h2>Revenue and Profit</h2>
        <div className="links"></div>
      </div>
      <Line data={data} />
    </div>
  );
};

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapState)(LineChart);
