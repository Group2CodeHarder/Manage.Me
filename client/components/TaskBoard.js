import React, { useState } from "react";
import { connect } from "react-redux";
import TaskList from "./TaskList";
import TaskActionButton from "./TaskActionButton";

class TaskBoard extends React.Component {
  render() {
    const { lists } = this.props;

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
          {lists.map((list) => (
            <TaskList
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TaskActionButton list />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists || [],
});

export default connect(mapStateToProps)(TaskBoard);
