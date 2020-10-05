import React from "react";

function person({person}) {
  return (
    <div>
      <div>
        i am {person.name}. I am {person.age} years old. My skill is{" "}
        {person.skill}
      </div>
    </div>
  );
}

export default person;
