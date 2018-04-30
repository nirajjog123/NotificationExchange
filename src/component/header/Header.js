import React from "react";
import { Component } from "react";
import { router, Redirect, Route } from 'react-router';
import { Link } from 'react-router-link';
import axios from 'axios';
import '../header/Header.css';
import { NotificationContainer } from 'react-notifications';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: false,
      dashboard: false,
      analytics: false,
      logout: false
    };
    this.onMessageClick = this.onMessageClick.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  onMessageClick(event) {
    let { logout } = this.state;
    if (event.target.id === 'dashboard') {
      this.setState({ dashboard: true, notification: false, analytics: false })
    } else if (event.target.id === 'message') {
      this.setState({ notification: true, dashboard: false, analytics: false })
    } else if (event.target.id === 'analytics') {
      this.setState({ notification: false, dashboard: false, analytics: true })
    }
  }

  onLogout(event) {
    localStorage.clear();
    this.setState({ logout: true });
    document.getElementById("Header").style.display = "none";
  }
  navClass(navItem) {
    let classNames = "nav-link ";
    if(navItem) {
      classNames += "highlight";
    }
    return classNames;
  }
  render() {
    const { notification } = this.state;
    const { dashboard, analytics, logout } = this.state;
    return (
      <div className="Header" id="Header">
        <nav className="navbar   navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <a className="navbar-brand" to="/notification" onClick={this.onMessageClick} id='dashboard'><img src="notify.png"/></a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className={this.navClass(this.state.dashboard)} onClick={this.onMessageClick} id='dashboard'>
                  Dashboard </a>
              </li>
              <li className="nav-item">
                <a className={this.navClass(this.state.notification)} onClick={this.onMessageClick} id='message'>
                  Messages </a>
              </li>
              <li className="nav-item">
                <a className={this.navClass(this.state.analytics)} onClick={this.onMessageClick} id='analytics'>
                  Analytics <span></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={this.onLogout}>
                  <i className="fa fa-fw fa-sign-out"></i>Logout</a>
              </li>

            </ul>
          </div>
        </nav>
        {notification && <Redirect to={{ pathname: '/notification' }} />}
        {dashboard && <Redirect to={{ pathname: '/dashboard' }} />}
        {analytics && <Redirect to={{ pathname: '/analytics' }} />}
        {logout && <Redirect to={{ pathname: '/' }} />}
        <NotificationContainer />
      </div>

    );
  }
}

export default Header;