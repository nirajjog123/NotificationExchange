import React, { Component } from 'react';
import { router, Redirect, Route } from 'react-router'
import { Link } from 'react-router-link'
import axios from 'axios';
import './login.css'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      'redirect': false,
      'signup': false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleCheck() {
    this.setState({ signup: true });
  }


  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.userName);
    event.preventDefault();

    let userName = this.state.userName;
    let pass = this.state.password;

    axios.post('api/login', {
      userName: userName,
      password: pass
    },
    )
      .then((response) => {
        console.log(response);

        this.setState({ redirect: true });
        let tokenKey = response.headers.authorization;
        localStorage.setItem('tokenId', tokenKey);
      })

  }

  render() {
    const { redirect } = this.state
    const { signup } = this.state
    return (
      <div className='login'>
        <div class="body"></div>

        <div class="container">

          <div className="card card-login mx-auto">
            <div className="card-header bkg-gray">Login</div>           

            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input className="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" name="userName" required
                    placeholder="Username or email" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input className="form-control" id="exampleInputPassword1" type="password" name="password" required
                    placeholder="Password" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" /> Remember Password</label>
                  </div>
                </div>
                <button type="submit" className="btn bkg-gray btn-block">Login</button>
              </form>
              <div className="text-center">
                <a className="d-block small mt-3" onClick={this.handleCheck.bind(this)}>Sign Up</a>
              </div>
              {redirect &&
                <Redirect to={{ pathname: '/dashboard' }} />}

              {signup &&
                <Redirect to={{ pathname: '/register' }} />}
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Login;