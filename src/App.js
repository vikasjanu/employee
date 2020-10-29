import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import ClassComp from './component/ClassComp';
import FunctionalComp from './component/FunctionalComp';
import { Switch, Route } from 'react-router-dom';
import About from './component/About';
import Login from './component/Login';
import Signup from './component/Signup';


function Test() {
  return  <h2>Test</h2>

}

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        {/* { <img src={logo} className="App-logo" alt="logo" /> */}
        <p id="AppID">
          Welcome Login Panel
        </p>
        {/* <Employee name="Vikas Choudhary" />
        <ClassComp/>
        <ClassComp text="first sdsd"/>
        <FunctionalComp text="function for functional"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}
        {/* <About name="MNIT" /> */}
        { <Switch>
          
          <Route path="/about" name="About Us Page" component={About} />
          <Route path="/login" name="About Us Page" component={Login} />
          <Route path="/signup" name="Signup Page" component={Signup} />
          <Route path="/" name="Login Page" component={Login} />
        </Switch> }

      </header>
      
    </div>
  );
}

export default App;
