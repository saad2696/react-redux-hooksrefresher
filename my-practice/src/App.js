import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Count from './components/Counter'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          <h2>
            -------------------Props from Function Components-----------------
          </h2>
        </p>
        <Greet name="Saad" student="std123">
          <p>(This is child props)</p>
        </Greet>
        <Greet name="Ali" student="std143">
          <button>Child Btn</button>
        </Greet>
        <Greet name="Khadija" student="std153"></Greet>
        <p>
          <h2>
            -------------------Props from Class components-----------------
          </h2>
        </p>
        <Welcome name="Saad" student="std123">
          <p>(This is child props)</p>
        </Welcome>
        <Welcome name="Ali" student="std143">
          <button>Child Btn</button>
        </Welcome>
        <Welcome name="Khadija" student="std153"></Welcome>
        {/*<Hello/>*/}
        <p>
          <h2>
            ------------------------State in React----------------------------
          </h2>
        </p>
        <Message />
        <p>
          <h2>
            -----------------------Set State Counter---------------------------
          </h2>
        </p>
        <Count/>
      </div>
    );
  }
}
export default App;
