import React, {Component} from 'react';
import Todo from "./Todo";
import './App.css';

class App extends Component{
  constructor (props) {
      super(props);
      this.state = {
          todos: [],
          currentTodo: ""
      };
  }

  onInputChange = e => {
      this.setState({currentTodo: e.target.value});
  }

  onClick = () => {
      let todosCopy = this.state.todos.slice();
      todosCopy.push(this.state.currentTodo);

      this.setState({todos: todosCopy, currentTodo:""});
  }

  deleteTodo = i => {
      let todosCopy = this.state.todos.slice();
      todosCopy.splice(i,1);
      this.setState({todos: todosCopy});
  }
  

  render(){
      let bulletedTodos = this.state.todos.map((e,i) => {
          return(
              <Todo todoelement={e} delete = {() => this.deleteTodo(i)} />
          );
      });
      return(
          <div className="todo">
            <h1>To-Do App</h1>
            <div className="inputbox">
              <input placeholder="Enter ToDo" value={this.state.currenttodo}
              onChange={this.onInputChange}/>
              <button onClick={this.onClick}>Add</button>
              <br/>
            </div>
            <div>
              {this.state.todos.length === 0? <h2>"No To Do items yet!"</h2> : <ul>{bulletedTodos}</ul>} 
            </div>
          </div>
          );
  }
}

export default App;