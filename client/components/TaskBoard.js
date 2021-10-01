import React, { useState } from "react";
import { connect } from "react-redux";
import TaskList from "./TaskList";
import TaskActionButton from "./TaskActionButton";


const TaskBoard = (props) => {
    const { lists, project } = props;

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
              listId={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
))}
          <TaskActionButton list project={ project } />
        </div>
      </div>
    );
  };

const mapStateToProps = (state) => ({
  lists: state.lists || [],
});

export default connect(mapStateToProps)(TaskBoard);
