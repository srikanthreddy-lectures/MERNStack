import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App.js';

ReactDOM.render( <BrowserRouter><Switch><App/></Switch></BrowserRouter>,document.getElementById('app'));