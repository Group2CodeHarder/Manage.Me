import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

const Profit = (props) => {
  const { projects } = props;

  const ytdProfit = () => {
    if (projects.length) {
      const today = new Date();
      const currYear = today.getFullYear();
      let currYearCompletedProj = projects.filter(
        (proj) => proj.deadlineYear === currYear && proj.status === "Complete"
      );
      let ytdProfit = 0;
      for (let i = 0; i < currYearCompletedProj.length; i++) {
        let profit =
          currYearCompletedProj[i].revenue - currYearCompletedProj[i].expense;
        ytdProfit += profit;
      }
      return ytdProfit;
    }
  };

  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.toLocaleString("default", { month: "long" });
  const currYear = newDate.getFullYear();
  const fulldate = `${date} ${month}, ${currYear}`;

  const profit = () => {
    if (projects.length != 0) {
      return ytdProfit();
    } else {
      return 0;
    }
  };

  return (
    <div>
      <div className="ytdProfitTable">YTD Total Profit is ${profit()}</div>
      <div className="ytdProfitDate">as of {fulldate}</div>
    </div>
  );
};

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapState)(Profit);
