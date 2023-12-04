import React, { Component } from "react";
import ToDoListComponent from "./ToDoList";
import './ToDoMain.css';

class ToDoMainComponent extends Component 
{  
  constructor(props)
  {
    super(props);
    this.newTodo = '';
    this.state = { items: []}; 
    this.addTodoBtnClick = this.addTodoBtnClick.bind(this);
    this.newTodoMessage = this.newTodoMessage.bind(this);
  }

  newTodoMessage = (event) => {
    this.newTodo = event.target.value;
  };

  addTodoBtnClick = () => {
    if(this.newTodo !== '') {
      this.state.items.push({
        data: this.newTodo
      });
      this.setState({
        items: this.state.items
      });
      console.log(this.state.items);
      this.newTodo = '';
      document.getElementById('newToDoInput').value = '';
    }
  }
  render() 
  {     
    return (
      <div className="mainContainer">
        <h1>TODO LIST</h1>
        <div className="flexLayout">
          <input id="newToDoInput" onChange={this.newTodoMessage} type="text"/>
          <button onClick={this.addTodoBtnClick}>Add</button>
        </div>
        <div className="listContainer">
          <ToDoListComponent items={this.state.items} /> 
        </div>
      </div>);
  }
}

export default ToDoMainComponent;