import React from "react";
import { Component } from "react";
import { router,Redirect,Route } from 'react-router'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: false
    };
    this.onMessageClick = this.onMessageClick.bind(this);
  }
  onMessageClick() {
    alert("aa");
    this.setState({
      notification: true
    })
  }
  render() {
    const {notification} = this.state;
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <a className="navbar-brand" href="#">Share Market</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={this.onMessageClick}>
                  Messages </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal">
                  Analytics <span></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal">
                  <i className="fa fa-fw fa-sign-out"></i>Logout</a>
              </li>

            </ul>
          </div>
        </nav>
        {notification &&
          <Redirect to={{ pathname: '/notification' }} />}
      </div>

    );
  }
}

export default Header;
