import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
export const Home = props => {
  const {username} = props

  return (
    <div className= 'content-wrapper'>
      <div>
        <h3>Welcome, {username}</h3>
      
        <Link to="/calendar">Calendar</Link>

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

export default connect(mapState)(Home);
