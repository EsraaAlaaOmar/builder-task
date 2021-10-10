
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header";
import ProdutDetails from './components/ProdutDetails'
import Update from './components/Update';
import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/main.scss'


ReactDOM.render(
<Router>
<React.StrictMode>
{/* {alert(" to edit it click items")} */}
  <Header />
  
  
  <Switch>
  <Route exact path="/">
    <App />
  </Route>
  <Route path="/blogs">
    <ProdutDetails />
  </Route>
  <Route path="/update">
    <Update/>
  </Route>

</Switch>
</React.StrictMode>
</Router> 
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

