import './App.css';
import { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Form from './Form.jsx';
import View from './View.jsx';
import Dashboard from './Dashboard.jsx';

function App() {
  /*   const [counter, setCounter] = useState(1000);
  const [persons, setPersons] = useState([
    { id: 1, name: 'Margit', title: 'CTO', location: 'Helsinki' },
    { id: 2, name: 'Karin', title: 'designer', location: 'Tartu' },
    { id: 3, name: 'Kati', title: 'developer', location: 'Far away' },
  ]); */
  /*   const [inputValue, setInputValue] = useState(''); */
  const [formData, setFormData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const displayHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  /*   const changeHandler = (event) => {
    setInputValue(event.target.value);
  }; */

  const changeFormHandler = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
    console.log(formData);
  };

  /*  const clickIncHandler = () => {
    setCounter(counter + 1);
  };
  const clickDecHandler = () => {
    setCounter(counter - 1);
  }; 
 */
  return (
    <>
      <Header />
      <button onClick={displayHandler}>Click me</button>
     {isLoggedIn && <Dashboard user="Teodor" />}
      {/*<Form changeHandler={changeFormHandler} />
      <View {...formData} /> */}
      <Footer />
    </>
  );
}

export default App;