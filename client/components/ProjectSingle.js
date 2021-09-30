import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TaskBoard from "./TaskBoard";

const ProjectSingle = (props) => {
const { project } = props;
const history = useHistory();
const handleEdit = () => history.push(`/projects/edit/${project.id}`);


  return (
    <div className="content-wrapper">
      <h3>{project.name}</h3>
      <div className= 'project-button'>
        <button onClick= {handleEdit}>Edit Project</button>
      </div>

      <div>

      <TaskBoard />
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