/*import './App.css';
import { useState } from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Form from './Components/Form.jsx';
import View from './Components/View.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Root from './Root.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";




  /*   const [counter, setCounter] = useState(1000);
  const [persons, setPersons] = useState([
    { id: 1, name: 'Margit', title: 'CTO', location: 'Helsinki' },
    { id: 2, name: 'Karin', title: 'designer', location: 'Tartu' },
    { id: 3, name: 'Kati', title: 'developer', location: 'Far away' },
  ]); */
  /*   const [inputValue, setInputValue] = useState(''); */
 
 /*const [formData, setFormData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const displayHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  }
*/

  /*   const changeHandler = (event) => {
    setInputValue(event.target.value);
  }; */

   /*const changeFormHandler = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
    console.log(formData);
  };
*/

  /*  const clickIncHandler = () => {
    setCounter(counter + 1);
  };
  const clickDecHandler = () => {
    setCounter(counter - 1);
  }; 
*/
  /* return (
   <>
      <Header />

      <a href='#'>Click me</a>

      <button onClick={displayHandler}>Click me</button><br></br><br></br>
     {isLoggedIn && <Dashboard user="Teodor" />}
      <Form changeHandler={changeFormHandler} />
      <View {...formData} /> 
      <Footer />
    </>
  );
}
*/
/*
function App() {
  const router = createBrowserRouter([
    { path:"/", element: <Root/>,
  children:[
    { path: "/", element: <Home/>},
    { path: "/about", element: <About/> },
  ], },
  ]);

return <RouterProvider router ={router} />; 
}

export default App;*/


import './App.css';
/* import { useState } from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Form from './Components/Form.jsx';
import View from './Components/View.jsx';
import Dashboard from './Pages/Dashboard.jsx'; */
import Root from './Root.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> }
      ],
    },
  ]);
 
  return <RouterProvider router={router} />;

}

export default App;