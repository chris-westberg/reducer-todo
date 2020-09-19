import React from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state.tasks, { id: Date.now(), task: task, completed: false }
              ]
        default:
            return state;
    }

};

export const tasks = [
    {
        task: 'learn about reducers', 
        completed: false, 
        id: 8495839093
    }, 
    {
        task: 'SCREAM INTERNALLY!!!', 
        completed: false, 
        id: 859403984995
    }
]

