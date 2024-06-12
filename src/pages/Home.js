import React, { Component } from "react";
import Todos from "../component/todos";
import AddTodo from "../component/AddTodo";
import "../pages/Home.css";

class Home extends Component {
  // Create a default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      id: 0,
      todos: [],
    };
  }
  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo, date) => {
    // In React, keys or ids in a list help identify which items have changed, been added or removed. Keys
    // should not share duplicate values.
    // To avoid having dup values, we use the Math.random() function to generate a random value for a todo id.
    // This solution works for a small application but a more complex hashing function should be used when
    // dealing with a larger data sensitive project.

    if (this.state.todos.find(existing => existing.content == todo.content)) {
      return;
    }

    todo.id = this.state.id;
    todo.date = date;
    // Create a array that contains the current array and the new todo item
    let new_list = [...this.state.todos, todo];
    // Update the local state with the new array.
    this.setState({
      todos: new_list,
      id: this.state.id + 1
    });
  };

  removeTodo = (id) => {
    const newList = this.state.todos.filter(todo => todo.id != id);
    this.setState({
      todos: newList
    });
  }
  render() {
    return (
      <div className="Home">
        <h1>Todo's </h1>
        {/* When passing the AddTodo component, addTodo is a prop that is used in the 
        AddTodo.js file when handling the submit */}
        <AddTodo addTodo={this.addTodo} />
        {/* When returning the Todos component, todos is a prop passed to the todos.js file
         to format and render the current todo list state */}
        <Todos todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default Home;
