import React from "react";
import { connect } from "react-redux";

const ProjectSingle = (props) => {
const { project } = props;
console.log (project);


  return (
    <div className="content-wrapper">
      <h3>{project.name}</h3>
      <div>
      <div>

      </div>

        
        
      </div>
    </div>
  );
};

const mapState = (state, {match}) => {
  const project = state.projects.find(proj => proj.id === match.params.id) || {};
    return {
        project: project,
  };
};

export default connect(mapState)(ProjectSingle);