import React from "react";
import { connect } from "react-redux";
import TaskCard from "./TaskCard";
import TaskActionButton from "./TaskActionButton";
// import { newList } from "../store/tasks";

// class TaskList extends React.Component {

   

export const TaskList = ({ title, cards, listID }) => {
    // state = {
    //     lists: {}
    // };
    return (
        <div>
        <div className="tasklist-cont" > 
            <h3>{title}</h3>
                { cards.length ?
                (cards.map(card => (
                <TaskCard cardID={card.id} key={card.id} content={card.content} />
                ))) : <div></div> }
            <div>
                <TaskActionButton listID={listID} />
            </div>
        </div>
        </div>
    )
// }
};

const mapState = (state) => {
    return {
        lists: state.lists || {},
        cards: state.cards || []
    };
};

export default connect(mapState)(TaskList);