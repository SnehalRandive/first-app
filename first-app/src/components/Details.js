import React from 'react';
import Person from './Person';

function Details() {
    const Persons =[{
        id:11,
        name :"pruva",
        age : 23,
        Course:"react"
},
{
    id:11,
        name :"Kiran",
        age : 60,
        Course:"NodeJs"
},
{
    id:11,
        name :"patil",
        age : 24,
        Course:"Mern"
}];

const names =["Ram","Sham","sita"]
const personList = Persons.map(persons =>
    (<Person person = {Person} />)
    )

const nameList = names.map(name =>
    <h2>{name}</h2>
    )

    // const name = ["Snehu","Patil","Developer"]
  return (
    <>
    <div>
      {personList}
      {nameList}
    </div>
    {/* <h3>{name[0]}</h3>
    <h3>{name[1]}</h3>
    <h3>{name[2]}</h3> */}
    </>
  );
}

export default Details;
