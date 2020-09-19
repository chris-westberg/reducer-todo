import React from 'react';

const Task = (props) => {
    return(
        <div className='task' onClick={()=> props.toggleTask(props.task.id)}>
            <p className={props.task.completed ? 'completed' : ""}>{props.task.task}</p>
        </div>
    )
};

export default Task;