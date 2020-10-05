import React, { Component } from "react";
//rce shortcut
export class ClassClick extends Component {
  clickHandler() {
      alert("i am triggered from class!")
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.clickHandler()}}> Click me!!</button>
      </div>
    );
  }
}

export default ClassClick;
