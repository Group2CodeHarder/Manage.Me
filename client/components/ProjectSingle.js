import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TaskBoard from "./TaskBoard";

const ProjectSingle = (props) => {
const { project } = props;
const history = useHistory();
const handleEdit = () => history.push(`/projects/edit/${project.id}`);

const pebbleColor = {
  color: '#ff945e'
};
const steelColor = {
  color: 'steelBlue'
};

const deadline = `${project.deadlineMonth} ${project.deadlineDate}, ${project.deadlineYear}`;
const startDate = `${project.startMonth} ${project.startDate}, ${project.startYear}`;


  return (
    <div className="content-wrapper">
      <h2>{project.name}</h2>
      <div className= 'project-button'>
        <button onClick= {handleEdit}>Edit Project</button>
      </div>
      <div className= 'single-project-container'>
        <div className='single-project-left'>
          <div className= 'project-info-container'>
            <h4>Current Status</h4>
            <hr/>
            <h3 style= {pebbleColor}>{project.status}</h3>
          </div>
          <div className= 'project-info-container'>
            <h4>Finances</h4>
            <hr/>
            <button>Bill Client</button>
          </div>
        </div>
        <div className='single-project-right'>
          <div className= 'project-info-container'>
            <h4>Important Dates</h4>
            <hr/>
            <h3 style= {steelColor}>Deadline</h3>
            <p>{deadline}</p>
            <br />
            <h3 style= {steelColor}>Project Start Date</h3>
            <p>{startDate}</p>
            <br />

          </div>
          <div className= 'project-info-container'>
            <h4>Client Information</h4>
            <hr/>
          </div>
        
        
        </div>

      


      </div>


      <div className= 'project-tasks-container'>

      <TaskBoard project={ project }/>

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