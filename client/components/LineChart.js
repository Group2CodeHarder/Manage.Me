import React from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const { projects } = props;

  console.log(projects);

  const revenue = projects.map((proj) => {
    return proj.revenue;
  });

  const cost = projects.map((proj) => {
    return proj.expense;
  });

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
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Revenue",
        data: revenue,
        fill: false,
        backgroundColor: "rgb(1, 58, 29)",
        borderColor: "rgba(1, 58, 29, 0.2)",
      },
      {
        label: "Total Cost",
        data: cost,
        // data: [1, 2, 1, 1, 2, 2], //need to replace with real data
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <div>
      <div className="graphHeader">
        <h2>Sales and Profit</h2>
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
