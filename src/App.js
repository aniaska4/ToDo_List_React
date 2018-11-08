import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import TodoInputs from "./components/todoInputs";
import TodoItem from "./components/todoItem";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id: 0, text: "Zrób obiad"},
      ],
      nextId: 1
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(todoText){
   let todos = this.state.todos.slice();
   todos.push({id: this.state.nextId, text: todoText});
   this.setState({
     todos: todos,
     nextId: ++this.setState.nextId
   })
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    })
  }
  
  render() {
    return (
      <div className="App">
       <div className="todo_wrapper">
       <Header />
       <TodoInputs todoText="" addTodo={this.addTodo} />    
       <ul>
         {
           this.state.todos.map((todo) => {
           return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                    
         })
        }
        </ul>

       </div>
      </div>
    );
  }
}

export default App;
