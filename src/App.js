import React, { Component } from 'react';
import Login from './component/login/login'
import Dashboard from './component/dashboard/dashboard'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    {/* <Login /> */}
    <Dashboard />
  
      </div>
    );
  }
}

export default App;
