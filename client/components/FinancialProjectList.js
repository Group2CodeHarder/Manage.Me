import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const FinancialProjectList = (props) => {
  const { project } = props;

  const monthMinusOneName = moment()
    .subtract(1, "month")
    .startOf("month")
    .format("MMMM")
    .slice(0, 3);

  const profit = project.revenue - project.expense;
  if (
    project.status === "Complete" &&
    project.deadlineMonth === monthMinusOneName
  ) {
    return (
      <div>
        <Link to={`/projects/${project.id}`}>
          <div id="project-list-item">
            <h4>{project.name}</h4>
            {/* <p>{project.deadlineMonth}</p> */}
            {/* <p>{project.status}</p> */}
            <p>${project.revenue}</p>
            <p>${project.expense}</p>
            <p>${profit}</p>
          </div>
        </Link>
      </div>
    );
  } else {
    return null;
  }
};

export default FinancialProjectList;
