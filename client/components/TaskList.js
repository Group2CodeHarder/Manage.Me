import React from "react";
import { connect } from "react-redux";
import TaskCard from "./TaskCard";
import TaskActionButton from "./TaskActionButton";

export const TaskList = ({ title, cards, listID }) => {

    return (
        <div>
        <div style={{backgroundColor: "#ccc", borderRadius: "5px", width: "300px", padding: "8px", marginRight: "8px", fontFamily: "Open Sans" | "sans-serif"}}>
            <h3>{title}</h3>
                { cards.map(card => (
                <TaskCard cardID={card.id} key={card.id} content={card.content} />
                ))}
            <div>
                <TaskActionButton listID={listID} />
            </div>
        </div>
        </div>
    )
}

export default connect()(TaskList);