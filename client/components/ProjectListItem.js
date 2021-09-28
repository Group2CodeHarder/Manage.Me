import React from "react";
import { Link } from "react-router-dom";

const ProjectListItem = (props) => {
  const { project } = props;

  const deadline = `${project.deadlineMonth} ${project.deadlineDate}, ${project.deadlineYear}`;

  return (
    <Link to={`/projects/${project.id}`}>
      <div id="project-list-item">
        <h4>{project.name}</h4>
        <p>{deadline}</p>
        <p>{project.status}</p>
        <p>{project.clientName}</p>
      </div>
    </Link>
  );
};

export default ProjectListItem;
