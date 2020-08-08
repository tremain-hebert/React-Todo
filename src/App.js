import React from 'react';
import ReactDom from "react-dom";

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

const taskList = [
  {
    task: "Review TK",
    id: 1,
    completed: false
  },
  {
    task: "Complete Project",
    id: 2,
    completed: false
  },
  {
    task: "Submit Project",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      taskList
    };
  }

  toggleTask = taskId => {
    console.log(taskId);
    this.setState({
      taskList: this.state.taskList.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  addTask = nTask => {
    const newTask = {
      task: nTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskList: [...this.state.taskList, newTask]
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      taskList: this.state.taskList.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.taskList}
          toggleTodo={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
