import React from 'react'
import {connect} from 'react-redux'

export const Profile = props => {

  return (
    <div className= 'content-wrapper'>
      <div>
        <h3>Personal Profile</h3>
      
        <p>It me.</p>

      </div>

    </div>
  )
}


const mapState = state => {
  return {
    state
  }
}

export default connect(mapState)(Profile);