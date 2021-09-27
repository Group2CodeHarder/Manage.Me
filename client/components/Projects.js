import React from "react";
import { connect } from "react-redux";
import ProjectListItem from "./ProjectListItem";

export const Projects = (props) => {
  const { projects } = props;
  return (
    <div className="content-wrapper">
      <h3>Projects</h3>
      <div>
        <p>{projects[0].name}</p>
        <p>{projects[1].name}</p>
        <ProjectListItem />
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapState)(Projects);
