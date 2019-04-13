import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import  Navbar  from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/global/Home";
import About from "./components/global/About";

import Dashboard from './components/dashboard/Dashboard';
import UpdateContact from "./components/contacts/UpdateContact";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

class App extends Component {
 
  render() {
    return (
      
      <BrowserRouter>
          <div className="App">
              <h3> In the Name of ALLAh </h3>
              <Navbar />

              <Switch>
                  
                  <Route exact path="/" component={Dashboard}></Route>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/about" component={About}></Route>

                  <Route path="/contacts/:id" component={UpdateContact}></Route>
                  <Route path="/signin" component={SignIn}></Route>
                  <Route path="/signup" component={SignUp}></Route>


                  
              </Switch>

              <Footer/>
              
          </div>
      </BrowserRouter>
    )
  }
}


export default App;
