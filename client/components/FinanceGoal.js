import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    if (projects.length != 0) {
      return ytdProfit();
    } else {
      return 0;
    }
  };

  const diff = () => {
    if (!ytdProfit()) {
      return allState.financialGoal - 0;
    } else {
      return allState.financialGoal - ytdProfit();
    }
  };

  const message = () => {
    if (Number(allState.financialGoal) === 0) {
      return `Set your financial goal here!==>`;
    } else if (profit() > allState.financialGoal) {
      return `You have earned $${profit()} this year and you reached your annual profit goal of $${
        allState.financialGoal
      }! `;
    } else {
      return ` You have earned $${profit()} this year, you are $${diff()} away from your
      annual profit goal of $${allState.financialGoal} this year!`;
    }
  };

  if (Number(allState.financialGoal) === 0) {
    return (
      <div>
        <div className="financialGoals">
          {message()} <Link to="/editBio">Set up your bio</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="financialGoals">{message()}</div>
      </div>
    );
  }
};

const mapState = (state) => {
  return {
    allState: state.auth,
    projects: state.projects,
  };
};

export default connect(mapState)(FinanceGoal);
