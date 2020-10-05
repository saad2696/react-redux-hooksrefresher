import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
//import Hello from "./components/Hello";
import Message from "./components/Message";
import Count from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
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
        <Count />
        <p>
          <h2>
            ------------------------Functional
            Events----------------------------
          </h2>
        </p>
        <FunctionClick />
        <p>
          <h2>
            ------------------------Class Events----------------------------
          </h2>
        </p>
        <ClassClick />
        <p>
          <h2>
            ------------------------Binding with this Keyword
            ----------------------------
          </h2>
        </p>
        <EventBind/>
        <p>
          <h2>
            ------------------------When child sends props to parent 
            ----------------------------
          </h2>
        </p>
        <ParentComponent/>
        <p>
          <h2>
            ------------------------Conditional Rendering 
            ----------------------------
          </h2>
        </p>
        <UserGreeting/>
        <p>
          <h2>
            ------------------------Render List
            ----------------------------
          </h2>
        </p>
        <NameList/>
      </div>
    );
  }
}
export default App;
