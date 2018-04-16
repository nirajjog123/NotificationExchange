import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './component/login/login';
import Register from './component/Register/Register';
import Dashboard from './component/dashboard/dashboard';
import Graph from './component/graph/graph';
import Message from './component/Msgconfigure/Msgconfigure';
import Notification from './component/Notification/Notification';
import Header from './component/header/Header';
import Analytics from './component/analytics/analytics';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
       
        <Router>
          <div className="App">
          <Header/>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/graph" component={Graph} />
            <Route exact path="/notification" component={Notification} />
            <Route exact path="/message" component={Message} />
            <Route exact path="/analytics" component={Analytics} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
