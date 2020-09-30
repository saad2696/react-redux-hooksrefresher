import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>My Name is {props.name} and have a student id of {props.student}</h1>
      {props.children}
    </div>
  );
};

export default Greet;
