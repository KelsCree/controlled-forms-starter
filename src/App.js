import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
class App extends Component {

  state = {
    todos: [
      {title: "First Todo", content: "My First Todo!"},
      {title: "Second Todo", content: "My Second Todo!"},
      {title: "Third Todo", content: "My Third Todo!"},
    ]
  }

  showTodos = () => this.state.todos.map(todo => <TodoItem deleteTodo={this.deleteTodo} key={todo.title} todo={todo}/>)

  addTodo = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  deleteTodo = (todo) => {
    const todos = this.state.todos.filter(t => t !== todo )
    this.setState({
      todos: todos
    })
  }

  render(){
    return (
      <div className="App">
      < TodoForm addTodo={this.addTodo}/>
      <ul>{this.showTodos()}</ul>      
      </div>
    );
  }
}

export default App;
