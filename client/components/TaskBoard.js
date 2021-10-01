import React, { useState } from "react";
import { connect } from "react-redux";
import TaskList from "./TaskList";
import TaskActionButton from "./TaskActionButton";


const TaskBoard = (props) => {
    const { boards, lists, project } = props;

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
            />
))}
          <TaskActionButton list project={ project } boards= {boards}/>
        </div>
      </div>
    );
  };

const mapState = (state) => ({
  lists: state.boards.lists || [],
  boards: state.boards || {}
});

export default connect(mapState)(TaskBoard);
