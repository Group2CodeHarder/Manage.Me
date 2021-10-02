import React from "react"; //, { useState, useRef }
import { connect } from "react-redux";
import TaskCard from "./TaskCard";
import TaskActionButton from "./TaskActionButton";
   
const TaskList = (props) => {
    const { title, cards, boards } = props; //lists, project,

    // const draggingItem = useRef();
    // const dragOverItem = useRef();

    // const [tasks, setTasks] = useState();

    // const handleDragStart = (el, position) => {
    //     draggingItem.current = position;
    //     console.log(el.target.innerHTML);
    // };

    // const handleDragEnter = (el, position) => {
    //     dragOverItem.current = position;
    //     console.log(el.target.innerHTML);

    //     const tasksCopy = [...tasks];

    //     const dragItemContent = tasksCopy[draggingItem.current];
    //     tasksCopy.splice(draggingItem.current, 1);
    //     tasksCopy.splice(dragOverItem.current, 0, dragItemContent);

    //     draggingItem.current = dragOverItem.current;
    //     dragOverItem.current = null;
    //     setTasks(tasksCopy);
    // };

    return (
        <div>
        <div className="tasklist-cont" > 
            <h3>{title}</h3>
                { cards.length ?
                (cards.map((card) => (
                <TaskCard 
                //onDragStart={(el)=> handleDragStart(el)} //, idx
                // onDragOver={(el) => el.preventDefault()}
                // onDragEnter={(el)=> handleDragEnter(el)} //, idx
                listId={props.listId} key={card.id} content={card.content} />
                ))) : <div></div>
                } 
            <div>
                <TaskActionButton listId={props.listId} projectId={props.projectId} boards={boards}/>
            </div>
        </div>
        </div>
    )
}; //, idx pass thru to cards.map

const mapState = (state) => {
    return {
        boards: state.boards || {},
        lists: state.lists || [],
        list: state.list || {},
        cards: state.cards || []
    };
};

export default connect(mapState)(TaskList);