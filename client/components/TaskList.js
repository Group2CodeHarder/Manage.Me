import React from "react";
import { connect } from "react-redux";
import TaskCard from "./TaskCard";
import TaskActionButton from "./TaskActionButton";
// import { newList } from "../store/tasks";

   
const TaskList = (props) => {
    const { title, cards, list } = props;
    console.log("PROPS", props);
    console.log("CARDS", cards);
    return (
        <div>
        <div className="tasklist-cont" > 
            <h3>{title}</h3>
                { cards.length ?
                (cards.map(card => (
                <TaskCard listId={props.listId} key={card.id} content={card.content} />
                ))) : <div></div> //cardId={card.id} inside TaskCard
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