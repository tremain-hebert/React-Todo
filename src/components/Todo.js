import React from "react";


const Todo = props => {
    return (
        <div
            className={`task${props.task.completed ? 'completed' : ''}`}
            onClick={() => props.toggleTodo(props.task.id)}
        >
            <p>{props.task.task}</p>
        </div>
    );
};

export default Todo;