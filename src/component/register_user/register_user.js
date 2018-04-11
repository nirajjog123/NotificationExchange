import React, { Component } from 'react';
import { router,Redirect,Route } from 'react-router'
import axios from 'axios';


class Register extends Component {
  
    constructor(props) {
        super(props);
        this.state = {userName: '',
                      password:'',
                      mobileNo:'',
                    'register_user':false};
    
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

      handleSubmit(event) {
        console.log('A name was submitted: ' + this.state);
        event.preventDefault();
        this.setState({register_user: true});

        let userName = this.state.userName;
        let pass = this.state.password;
        let mobileNumber = this.state.mobileNo;

        axios.post('api/register',{
          userName: userName,
          password: pass,
          mobileNo: mobileNumber
        })
          .then( (response) => {
            console.log(response);
        
            this.setState({redirect: true});
           
          })

       
      }


    render() {
        const { register_user } = this.state
    return (
        <div class="container">
    <div class="card card-register mx-auto mt-5">
      <div class="card-header">Register an Account</div>
      <div class="card-body">
        <form onSubmit={this.handleSubmit}>
          
          <div class="form-group">
            <label >UserName or Email address</label>
            <input class="form-control"  type="text" name="userName" id='username' required  
                      placeholder="Username or email" onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label >Password</label>
                <input class="form-control" name="password" type="password" required
                       placeholder="Re-enter Password" onChange={this.handleChange}/>
              </div>
              <div class="col-md-6">
                <label for="exampleConfirmPassword">Confirm password</label>
                <input class="form-control" id="exampleConfirmPassword" type="password" placeholder="Confirm password"/>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label >Mobile No</label>
            <input class="form-control"  name="mobileNo" id="mobileNo" required
                       placeholder="enter mobile no" onChange={this.handleChange}/>
          </div>
          <button type='submit' className="btn btn-primary btn-block">Register</button>
        </form>
        <div class="text-center">
          <a class="d-block small mt-3" href="#">Login Page</a>
          <a class="d-block small" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
    {register_user &&
    <Redirect to = {{pathname:'/dashboard'}}/>}
  </div>
    );
  }
}

export default Register;