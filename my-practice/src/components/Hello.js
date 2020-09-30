import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h3>Hello Saad Again</h3>
  //     </div>
  //   );
  //--------Create HTML Div/h1 etc or anything in react with createElement-----------//
  return React.createElement(
    "div",
    {id: 'hello', className:'dummyClass'},
    React.createElement("h1", null, "Saad from createElement")
  );
};

export default Hello;
