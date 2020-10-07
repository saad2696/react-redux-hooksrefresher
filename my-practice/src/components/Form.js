import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "React"
    };
  }
  handleUsernNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleSelectChnage=(event)=>{
      this.setState({
          topic : event.target.value
      })
  }
  handleSubmit=(event)=>{
    alert(`The user name ${this.state.username} and your comment is ${this.state.comments} and your skill is ${this.state.topic}`)  
     event.preventDefault(); 
   }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Enter Name</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernNameChange}
            ></input>
          </div>

          <div>
            <label>Enter Your Comments</label>
            <textarea
              type="text"
              value={this.state.comments}
              onChange={this.handleCommentChange}
            ></textarea>
          </div>
          <div>
              <label>Options</label>
              <select value={this.state.topic} onChange={this.handleSelectChnage}>
                  <option value="react"> React</option>
                  <option value="angular"> Angular</option>
                  <option value="vue"> Vue</option>
                  
              </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
