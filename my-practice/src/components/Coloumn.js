import React from "react";
//TD CANNONT BE CHILD OF DIV TAG

function Coloumn() {
  const items = [
    {
      id: 1,
      title: "React",
    },
  ];
  return ( 
    <>
      {
      items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
      <p>{item.title}</p>
          
        </React.Fragment>
      ))
      }
      {/* <td>Name</td>
      <td>Saad</td> */}
    </>
  );
}

export default Coloumn;
