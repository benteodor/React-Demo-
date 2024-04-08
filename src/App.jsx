import './App.css';
import Box from './Box.jsx';
import { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Counter from './Counter.jsx';
import Form from './Form.jsx';

function App() {
  const [counter, setCounter] = useState(0);
  const [persons, setPersons] = useState([
    { id:1, name: "Teodor", title:"student" ,ocation:"Helsinki"},           { id:2, name: "Marius",title:"student" ,ocation:"Helsinki"},            { id:3, name: "Dana", title:"student", ocation:"Helsinki" },
  ]);

  const [inputValue, setInputValue] = useState('')

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };
 
  const clickHandler = () => {
    setCounter(counter + 1);
  };

  const clickDecrease = () => {
    setCounter(counter - 1);
  };


  return (
    <>
    <Header />
    <input type='text' onChange={changeHandler}/>
      <p>{inputValue}</p>

    
    {persons.map((person) => (
    <Box key={person.id}        name={person.name}
    title={person.title}
    location={person.location}
    />
    ))}
    <Footer/>
    </>
    );
    }



export default App;
