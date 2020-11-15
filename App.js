import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {useState} from 'react'
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Login from './Login.js'
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    //BEM
    <div className="App">
      
      {!user ? (
        <Login/>
       ) : (

      <div className="app_body">

        <Router>
        <Sidebar/>
          <Switch>
          
          
        
        <Route path="/rooms/:roomId">

        <Chat/>
        </Route>
        <Route path="/">
        
        </Route>
        </Switch>
        </Router>
      </div>
       )}
    </div>
  );
}


export default App;
