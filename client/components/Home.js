import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

export const Home = props => {
  const {username} = props

  return (
    <div>
      <div>
      <h3>Welcome, {username}</h3>
        <button className= 'google Signin'>
          <a href='/auth/google/logout'>Logout</a>
        </button>
      </div>
      <div>
        <button className= 'trello Signin'>
          <a href='/trello/login'>Login to Trello</a>
        </button>
      </div>
    </div>
  )
}


const mapState = state => {
  return {
    username: state.auth.username
  }
}

const HomeWithRouter = withRouter(Home);
export default connect(mapState)(HomeWithRouter);
