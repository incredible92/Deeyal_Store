import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/About";
import Order from './pages/Order/Order';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';

import './App.scss'





function App() {
 
  return (
    <div>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={Aboutus} />
      <Route path="/order" component={Order} />
      <Route path="/login" component={Login} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>

  )
}

export default App
