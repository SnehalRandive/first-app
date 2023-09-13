import React from 'react';

function Person({person}) {
  return (
  <>
    <div>
      person
    </div>
    <h3>My name is {person.name}.I am {person.age}years old.My id is {person.id}and course name is {person.Course}</h3>
    </>
  ); 
}

export default Person;
