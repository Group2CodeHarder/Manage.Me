import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

export const Home = props => {
  const {username} = props

  return (
    <div>
      <h3>Welcome, {username}</h3>
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
