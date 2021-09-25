import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div>
      <div>
      <h3>Welcome, {username}</h3>
      <button className= 'google Signin'>
        <a href='/auth/google/logout'>Logout</a>
      </button></div>
      <div><button className= 'trello Signin'>
        <a href='/trello/login'>Login to Trello</a>
      </button></div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
