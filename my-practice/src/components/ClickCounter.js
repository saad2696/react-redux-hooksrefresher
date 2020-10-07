import React, { Component } from "react";

class ClickCounter extends Component {
  render() {
    const { count , incrementHandler} = this.props;
    return (
      <div>
        <button onClick={incrementHandler}>Click {count} times</button>
      </div>
    );
  }
}

export default ClickCounter;
