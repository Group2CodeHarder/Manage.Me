import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends Component {
  render() {
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
          data: [12, 19, 3, 5, 2, 3], // need to replace with real data
          fill: false,
          backgroundColor: "rgb(1, 58, 29)",
          borderColor: "rgba(1, 58, 29, 0.2)",
        },
        {
          label: "Total Cost",
          data: [1, 2, 1, 1, 2, 2], //need to replace with real data
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };

    return (
      <>
        <div className="header">
          <h1 className="title">Sales and Profit</h1>
          <div className="links"></div>
        </div>
        <Line data={data} />
      </>
    );
  }
}

export default LineChart;
