import React from "react";
import { connect } from "react-redux";

const FinanceGoal = (props) => {
  const { allState, projects } = props;

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
  const profit = () => {
    if (!ytdProfit()) {
      return 0;
    } else {
      ytdProfit();
    }
  };

  const diff = () => {
    if (!ytdProfit()) {
      return allState.financialGoal - 0;
    } else {
      return allState.financialGoal - ytdProfit();
    }
  };

  return (
    <div>
      <div className="financialGoals">
        You have earned ${profit()} this year, you are ${diff()} away from your
        financial goal of ${allState.financialGoal} this year!
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    allState: state.auth,
    projects: state.projects,
  };
};

export default connect(mapState)(FinanceGoal);
