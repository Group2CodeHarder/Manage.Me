import React from 'react'
import {connect} from 'react-redux'
import TaskBoard from './TaskBoard'

export const Projects = props => {

  return (
    <div className= 'content-wrapper'>
      <div>
        <h3>Projects</h3>
      
        <p>Let's get creative.</p>
        <TaskBoard />

      </div>

    </div>
  )
}


const mapState = state => {
  return {
    state
  }
}

export default connect(mapState)(Projects);