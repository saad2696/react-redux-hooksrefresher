import React, { Component } from "react";

class Message extends Component {
  constructor() {
    //super has to be written as we are extending component class here
    // we have to make call to base class
    super();
    //inside a class so we have to use ( this)
    //state is a current scinerio we are in
    //object privately maintained within class is state 
    this.state = {
      message: "Welcome visitor",
    };
  }
  //state handler we require a function always
  changeMessage(){
      //set state set a new state for us upon any action 
      this.setState({
          message: "thanks for coming!"
      })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message} </h1>
        <button onClick={()=>{
            this.changeMessage()
        }}>Click Me!</button>
      </div>
    );
  }
}

export default Message;
