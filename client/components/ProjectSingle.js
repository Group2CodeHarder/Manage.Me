import React from "react";
import { connect } from "react-redux";

import TaskBoard from "./TaskBoard";

const ProjectSingle = (props) => {



  return (
    <div className="content-wrapper">
      <h3>This is a single project!</h3>
      <div>
      <div>
      <TaskBoard />
      </div>

        
        
      </div>
    </div>
  );
};

const mapState = ({state}, {match}) => {
  console.log(match.params.id)
  
    return {
        state,
  };
};

export default connect(mapState)(ProjectSingle);