import React from "react";
import { connect } from "react-redux";

export const TaskCard= ({content}) => {

    return (
        <div>
            <div style={{backgroundColor: "white", margin: ".5rem", marginBottom: "8px", padding: "1rem", fontFamily: "Open Sans" | "sans-serif"}}>
            <h4>{content}</h4>
            <div></div>
        </div>
        </div>
    )
}

export default connect()(TaskCard);