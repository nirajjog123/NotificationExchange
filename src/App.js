import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './component/login/login'
import Register from './component/register_user/register_user'
import Dashboard from './component/dashboard/dashboard'
import Graph from './component/graph/graph'
import Message from './component/msg_configure/msg_configure'
import Notification_listing from './component/notification_container/notification_listing'
import Header from './component/header/Header'
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
            <Route exact path="/notification" component={Notification_listing} />
            <Route exact path="/message" component={Message} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
