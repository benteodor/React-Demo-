import './App.css';
import Box from './Box.jsx';
import { useState } from 'react';


function App() {
  const [counter, setCounter] = useState("for example");
  const [persons, setPersons] = useState([
    { id:1, name: "Teodor", title:"student" ,ocation:"Helsinki"},           { id:2, name: "Marius",title:"student" ,ocation:"Helsinki"},            { id:3, name: "Dana", title:"student", ocation:"Helsinki" },
  ]);
 
  return (
    <>
    <p>Counter: {counter}</p>

    {persons.map((person) => (
    <Box key={person.id}        name={person.name}
    title={person.title}
    location={person.location}
    />
    ))}
    </>
    );
    }



export default App;
