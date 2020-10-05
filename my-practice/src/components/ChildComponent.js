import React from "react";

function ChildComponent(props) {
  //two way data flow
  return (
    <div>
      <button
        onClick={() => {
          props.greetHandler("child");
        }}
      >
        Greet Parent!
      </button>
    </div>
  );
}

export default ChildComponent;
