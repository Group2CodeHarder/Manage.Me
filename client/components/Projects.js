import React from 'react'
import {connect} from 'react-redux'

export const Projects = props => {

  return (
    <div>
      <div>
        <h3>Projects</h3>
      
        <p>Let's get creative.</p>

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