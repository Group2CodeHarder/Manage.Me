import React from "react";
import { connect } from "react-redux";
import ProjectListItem from "./ProjectListItem";
import { Link, useHistory } from 'react-router-dom';

const Projects = (props) => {
  const { projects } = props;
  const history = useHistory();
  const handleClick = () => history.push('/projects/create');
  return (
    <div className="content-wrapper">
      <h2>Projects</h2>
      <div className= 'project-button'>
        <button onClick= {handleClick}> Create New Project</button>
      </div>
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
  const projects = state.projects.filter(project => project.status !== 'Complete') || [];
  return {
    projects: projects,
  };
};

export default connect(mapState)(Projects);
