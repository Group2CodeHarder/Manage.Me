import React from "react";
import { connect } from "react-redux";

const TaskCard= ({content}) => {
    
    // const draggingItem = useRef();

    // const handleDragStart = (el, position) => {
    //     draggingItem.current = position;
    //     console.log(el.target.innerHTML);
    // };

    return (
        <div>
            <div className="card-div" style={{backgroundColor: "white", margin: ".5rem", marginBottom: "8px", padding: "1rem", fontFamily: "Open Sans" | "sans-serif"}}>
            <h4 
            // onDragStart={(el)=> handleDragStart(el, index)}
            >{content}</h4>
            <div>
                <button className="card-div-btn-del">X</button>
            </div>
        </div>
        </div>
    )
}

export default connect()(TaskCard);