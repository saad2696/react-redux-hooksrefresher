import React from "react";
//const Greet = (props) => { without destruction
//with destructuring of props
const Greet = (props) => {
  //renaming of props or destructioring of props here 
  const { name, student } = props;
  return (
    <div>
      <h1>
        My Name is {name} and have a student id of {student}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
