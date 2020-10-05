import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello"
    }
    //third approach of binding 
    // this.clickHandler = this.clickHandler.bind(this);
  }
//   clickHandler() {
//     //this is undefined in handler
//     //scope of this is not reachable in handler
//     //this will returned as undefined in clickhander 
//     this.setState({
//       message: "good bye!",
//     });
//   }

//fourth approach 
clickhandler = () =>{
    this.setState({
        message: "Good Night!"
    })
    console.log(this);
}

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*First approach to handle binding */}
        {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
        {/*Second Approach use fat arrow functions in render */}
        {/*<button onClick={()=> this.clickHandler()}>Click</button>*/}
        {/*Third approach to bind event handler rathaer than binding in render at line 10*/}
        <button onClick={this.clickhandler}>click</button>


      </div>
    );
  }
}

export default EventBind;
