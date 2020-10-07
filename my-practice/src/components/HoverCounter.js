import React, { Component } from "react";

class HoverCounter extends Component {
  render() {
    const { count  , incrementHandler } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementHandler}>Hover {count} times </h2>
      </div>
    );
  }
}

export default HoverCounter;
