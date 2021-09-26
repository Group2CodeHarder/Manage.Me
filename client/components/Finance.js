import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export const Finance = props => {

  return (
    <div>
      <div>
        <h3>Finance Dashboard</h3>
      
        <Link to="/checkout">Payment(Test)</Link>

      </div>

    </div>
  )
}


const mapState = state => {
  return {
    state
  }
}

export default connect(mapState)(Finance);
