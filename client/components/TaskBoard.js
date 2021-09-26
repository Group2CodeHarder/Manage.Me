import React, { useState } from "react";
import { connect } from "react-redux";
import TaskList from "./TaskList";

class TaskBoard extends React.Component {
  render() {
      const allLists = this.props.lists;
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "8px",
            padding: "8px",
          }}
        >
          {allLists.map((list) => (
            <TaskList title="List" cards="{props.tasks.cards}" />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    lists: state.lists || [],

});

export default connect(mapStateToProps)(TaskBoard);
