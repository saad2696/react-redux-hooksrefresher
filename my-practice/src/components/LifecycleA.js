import React, { Component } from "react";
import LifeCycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Saad",
    };
    console.log("Life cycle constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("life cycle A getDerivedstatefromProps");
    return null;
  }

  componentDidMount() {
    console.log(" Life Cycle A component did mount ");
  }
  shouldComponentUpdate() {
    console.log("Life Cycle A Should Compnent  update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevUpdate) {
    console.log("Life Cycle A Get snapshot before update");
    return null;
  }
  componentDidUpdate() {
    console.log("Life Cycle A Get compnent did update");
    return true;
  }
  changeState = () => {
    this.setState({
      name: "YourDailyTech",
    });
  };
  render() {
    console.log("Life Cycle A render");
    return (
      <div>
        LifeCycle A
        <LifeCycleB />
        <button onclick={this.changeState}>Change State </button>
      </div>
    );
  }
}

export default LifecycleA;
