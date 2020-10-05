import React from "react";

//import Person from "./person";
//List rendering
function NameList() {
   const name = ["Bruce", "Clark", "Diana"];
  //   const nameList = name.map(name => <div>{name}</div>)
  const PersonProfile = [
    {
      id: 1,
      name: "Saad",
      age: 24,
      skill: "React JS",
    },
    {
      id: 2,
      name: "Jaan",
      age: 23,
      skill: "Angular JS",
    },
    {
      id: 3,
      name: "Dua",
      age: 22,
      skill: "MBBS",
    },
  ];
//   const PersonList = PersonProfile.map((person) => (
//     <Person key={person.id} person={person}></Person>
//   ));
//--index is used for unique key--//
// use index as key when //
//1- The items in ur list donot have unique id
//2- The list is static and will not change 
//3- The list will never will be reorder or filtered 
//npm package to give unique id to list 
//hashing some unique key 

const nameList = name.map((name , index)=> <div><h2 key={index}>{index}{name}</h2></div>)
  return (
    <div>
      <h2>{nameList}</h2>
    </div>
  );
}

export default NameList;
