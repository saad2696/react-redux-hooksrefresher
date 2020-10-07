import React, { Component } from "react";

class Fragment extends Component {
  render() {
      //under return we have to wrap our jsx in div and add extra div 
      //after app, for that we can use React.Fragment to prevent 
      //extra div to be added
      //fragment can also be written as empty closing and opening tag
      //se in coloumn component
    return (
      <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>This decribes the Fragment Demo Component</p>
      </React.Fragment>
    );
  }
}

export default Fragment;
