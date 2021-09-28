import React from "react";
import { connect } from "react-redux";
import ProjectListItem from "./ProjectListItem";

export const Projects = (props) => {
  const { projects } = props;
  
  return (
    <div className="content-wrapper">
      <h3>Projects</h3>
      <button> Create New Project</button>
      <div id= 'project-list-titles'>
        <h4>Project Name</h4>
        <h4>Deadline</h4>
        <h4>Status</h4>
        <h4>Client</h4>
      </div>
      <hr/>  
      <div id='project-list'>
        {projects.map((project) => {
          return (
            <ProjectListItem project= {project} key= {project.id}/>
          )
        })}
      </div>  

    </div>
  );
};

const mapState = (state) => {
  return {
    projects: state.projects || [],
  };
};

export default connect(mapState)(Projects);
