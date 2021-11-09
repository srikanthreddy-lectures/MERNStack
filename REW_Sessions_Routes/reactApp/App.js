import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import "./App.css";
import thumb from "./img.png";

//Import Components
import Nav from "./Nav";

const App = () => (
  <div>
       <Switch>
          <Route exact path='/' render={(props) => <Home />}/>
          <Route path='/login' render={(props) => <Login />}/>
        </Switch>
  </div>
);

export default App;