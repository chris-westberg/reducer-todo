import React from 'react';
import Task from './task'

const TodoList = (props) => {
    return(
        <div>
            {props.tasks.map((task) => {
                return (<Task task={task} toggleTask={props.toggleTask}/>
                )
            })}
    
            <button onClick={props.clearCompleted}>ELIMINATE THE DESTROYED!!
            </button>
            <button onClick={props.clearAll}>ELIMINATE THEM ALL!!</button>
        </div>
        )
}

export default TodoList;