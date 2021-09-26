import React from "react";
import { connect } from "react-redux";
import TaskCard from "./TaskCard";

export const TaskList = ({title}) => {

    return (
        <div>
        <div style={{backgroundColor: "#ccc", borderRadius: "5px", width: "300px", padding: "8px", marginRight: "8px", fontFamily: "Open Sans" | "sans-serif"}}>
            <h3>{title}</h3>
            <div><TaskCard content = "First Task"/></div>
            <div></div>
        </div>
        </div>
    )
}

export default connect()(TaskList);