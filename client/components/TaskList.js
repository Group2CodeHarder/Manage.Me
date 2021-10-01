import React from "react";
import { connect } from "react-redux";
import TaskCard from "./TaskCard";
import TaskActionButton from "./TaskActionButton";
// import { newList } from "../store/tasks";

   
const TaskList = (props) => {
    const { title, cards, list } = props;
    console.log("PROPS", props);
    
    return (
        <div>
        <div className="tasklist-cont" > 
            <h3>{title}</h3>
                { cards.length ?
                (cards.map(card => (
                <TaskCard cardId={card.id} listId={props.listId} key={card.id} content={card.content} />
                ))) : <div></div>
                }
            <div>
                <TaskActionButton listId={props.listId}/>
            </div>
        </div>
        </div>
    )
// }
};

const mapState = (state) => {
    return {
        list: state.list || {},
        cards: state.cards || []
    };
};

export default connect(mapState)(TaskList);