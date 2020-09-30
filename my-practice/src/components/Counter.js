import React, { Component } from "react";
//irc shortcut to make class component
class Counter extends Component {
  //shortcut to make construtor is rconst
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  //never ever directly change this.state.x value ever
  //use set state always
  // if we call set state 5 times even in another handler , react is used
  //to setstate in a single go so value will not be passed on and we will still get
  // the value of  1
  incrementalHandler() {
 
    // this.setState({
    //     count: this.state.count+1
    // }, ()=>{
    //     console.log("Call back Value ", this.state.count)
    // })
    //it is recommended not use the current state and change it with some parameter
    //we introduce prevstate parameter
    // second perimeter can be props
    //props.addValue maybe
    this.setState( (prevState , props) => ({
      count: prevState.count + 1,
    }));
  }
  //to increment five 
  incrementFive(){
      for( var i=0;i<5;i++){
          this.incrementalHandler();
      }
  }


  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button
          onClick={() => {
            this.incrementFive();
          }}
        >
          Counter
        </button>
      </div>
    );
  }
}

export default Counter;
