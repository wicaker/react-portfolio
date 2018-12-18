import React, { Component } from 'react';
import NavbarMenu from './layout/Navbar';
import MyComponent from'./pages/Parallax';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from'./pages/Contact';
import Skills from'./pages/Skills';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
      <div >
        <NavbarMenu />
        <Switch>
          <Route exact path='/' component ={MyComponent}/>
          <Route exact path='/skills' component ={Skills}/>
          <Route exact path='/contact' component ={Contact}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
