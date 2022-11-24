import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Home from './components/Home'
import About from './components/About';
import FormSubmitted from './components/FormSubmitted';
import {Route, Switch, Link, Redirect, useHistory} from "react-router-dom";
import Form1 from './components/Form1';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup/index.jsx';
import Login from './components/Login/index.jsx';


function App() {
 
  const user =localStorage.getItem("token")
  return (  
<switch>
<Route path="/signup" > 
<Signup/>
</Route> 
      <Route path="/login">
        <Login/>
      </Route>
    {!user && <Route path='/' > <Redirect to='/login'/> 
      </Route>}
      
     {user &&<Route  exact path='/' >  
        <Home/>
        <Navbar/>
      </Route>}
      {user && <Route path='/about'> 
        <About/>
        <Navbar/>
      </Route>}
      { user &&<Route path='/form'>
        <Form1/>  
        <Navbar/>
      </Route>}
      {user &&<Route path='/formsubmitted'>
        <FormSubmitted/>  
      </Route>}
    { user &&<Route path='/dashboard'>
        <Dashboard/>
        <Navbar/>  
      </Route>}

     

      </switch>
  
    
  );
}

export default App;
