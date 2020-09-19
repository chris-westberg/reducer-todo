import React, { useState, useReducer } from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList'
import { tasks, reducer } from './reducers/reducer'
const App = () => {

  
  // const [stateStuff, setStateStuff] = useState({
  //   tasks: tasks
  // })
  
  const [state, dispatch] = useReducer(reducer, tasks)
// const addTask = (taskName) => {
//   setStateStuff({
//     tasks: [
//       ...stateStuff.tasks, { id: Date.now(), task: taskName, completed: false }
//     ]
//   })
// }


// addTask = (taskName) => {
//   this.setState({
//     tasks: [
//       ...this.state.tasks, { id: Date.now(), task: taskName, completed: false}
//     ]
//   })
// }

const toggleTask = (taskId) => {
  setStateStuff({
    tasks: stateStuff.tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    })
  })
}

// toggleTask = (taskId) => {
//   this.setState({
//     tasks: this.state.tasks.map((task) => {
//       if (task.id === taskId) {
//         return {
//           ...task, 
//           completed:!task.completed
//         };
//       }
//       return task;
//     })
//   });
// };

const clearCompleted = () => {
  setStateStuff({
    tasks:
      stateStuff.tasks.filter((task) => {
        return !task.completed;
      })
  })
}

const clearAll = () => {
  setStateStuff({
    tasks:
      stateStuff.tasks.filter((task) => {
        return
      })
  })
}

  return (
    <>
      <TodoForm addTask={(task) => dispatch({ type:'ADD_TASK', payload: task})} />
      <TodoList tasks={stateStuff.tasks} toggleTask={toggleTask} clearCompleted={clearCompleted} clearAll={clearAll} />
    </>
  )
}


export default App;
