import React, { Component } from "react";

class Welcome extends Component {
  render() {
    //return some html
    return (
      <div className="container">
        <h1>
          My name is {this.props.name} and have student id ={" "}
          {this.props.student}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
export default Welcome;
//------------------Functional--------------------//
//functional components  recieve props and return
//use functional components as much possible
//always use functional over class
//functional component don't have this key word
//Mainly responsible for ui
//dumb components and states cannot maintained here
//provide lifecycle hooks in v16.7.0 alpha
//-------------------------------------------------//

//=====================Class components===========//
//more feature rich
//maintain thier own private data => state
//stateful compnents
//provide lifecycle hooks
//=================================================//
