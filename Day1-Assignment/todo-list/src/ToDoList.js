import React, { Component } from "react";
import './ToDoList.css';

class ToDoListComponent extends Component 
{  
  
  constructor(props) {
    super(props);     
    console.log(this.props.items)     
  }

  render() 
  {     
    console.log(this.props);
    let resultArr = this.props.items.map((item, index) => {
      return (
        <div className="item" key={index}>
          {item.data}
        </div>
      )
    });

    return (
      <div>
      {resultArr}
      </div>
    )
  }
}

export default ToDoListComponent;