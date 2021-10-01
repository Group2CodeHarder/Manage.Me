import React from 'react';
import { connect } from 'react-redux';

class ProjectSingleClient extends React.Component {
  constructor(props){
    super(props);
  };




  render() {
    const { project } = this.props;
   
    const pebbleColor = {
      color: '#ff945e'
    };
    const steelColor = {
      color: 'steelBlue',
      textAlign: 'left'
    };
    const right = {
      textAlign: 'right'
    };

    const deadline = `${project.deadlineMonth} ${project.deadlineDate}, ${project.deadlineYear}`;
    const startDate = `${project.startMonth} ${project.startDate}, ${project.startYear}`;

    return (
      <div className="content-wrapper">
        <h2>{project.name}</h2>
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
              <p><strong>Expected Revenue</strong>   $ {project.revenue}</p>
              <p><strong>Expenses</strong>   $ {project.expense}.00</p>
            </div>
            <div className= 'project-info-container-buttons'>
              <button>Generate Shareable Link</button>
              <button onClick= {handleEdit}>Edit Project</button>
            </div>

          </div>
          <div className='single-project-right'>
            <div className= 'project-info-container'>
              <h4>Important Dates</h4>
              <hr/>
              <h3 style= {steelColor}>Deadline:</h3>
              <p style= {right}>{deadline}</p>
              <h3 style= {steelColor}>Project Start Date:</h3>
              <p style= {right}>{startDate}</p>
            </div>
            <div className= 'project-info-container'>
              <h4>Client Information</h4>
              <hr/>
              <p><strong>Name</strong>  {project.clientName}</p>
              <p><strong>Phone</strong>  {project.clientPhone}</p>
              <p><strong>Email</strong>  {project.clientEmail}</p>
            </div>
          </div>
        </div>   
      </div>
    );
  };
  
};

const mapState = (state, {match}) => {
  const project = state.projects.find(proj => proj.id === match.params.id) || {};
    return {
        project: project,
  };
};

// const mapDispatch =

export default connect(mapState/*, mapDispatch*/)(ProjectSingleClient);