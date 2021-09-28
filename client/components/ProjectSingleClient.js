import React from "react";
import { connect } from "react-redux";

const ProjectSingleClient = (props) => {



  return (
    <div className="content-wrapper">
      <h3>This is the client Project view!</h3>
      <div>
      <div>

      </div>

        
        
      </div>
    </div>
  );
};

const mapState = (state) => {

    return {
        state,
  };
};

export default connect(mapState)(ProjectSingleClient);