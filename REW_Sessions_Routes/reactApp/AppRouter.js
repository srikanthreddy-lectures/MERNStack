import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./Login"
import Home from "./Home"

export default function AppRouter(){

    return (
    <Switch>
          <Route path="/home" component={Home} />
          <Route path="/l" component={Login} />
    </Switch>
    );
}