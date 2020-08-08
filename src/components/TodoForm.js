import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    handleChanges = e => {
        this.setState({ task: e.target.value });
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({ task: '' });
    };

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input
                    type="text"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChanges}
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;