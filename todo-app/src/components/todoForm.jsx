import React from 'react';

class TodoForm extends React.Component {
    state = {
        task: ''
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
    }

    handleChange = e => {
        this.setState({
            task: e.target.value
        })
    }
    
    render(){
        return (
    <form onSubmit={this.handleSubmit}>
        <input 
            type='text' 
            onChange={this.handleChange}
            value={this.state.task}
        />
        <button>PUT IT ON THE LIST!!</button>
    </form>
        )
};
};

export default TodoForm