import React, { Component } from 'react';
import { router,Redirect,Route } from 'react-router'
import { Link } from 'react-router-link'
import axios from 'axios';
//import '../dashboard/dashboard'
import './login.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {userName: '',
                      password:'',
                    'redirect':false,
                    'signup':false}
    
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

      handleCheck(){
        this.setState({signup: true});
      }
      

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.userName);
        event.preventDefault();
        
        let userName = this.state.userName;
        let pass = this.state.password;

        axios.post('api/login',{
          userName: userName,
          password: pass
        })
          .then( (response) => {
            console.log(response);
        
            this.setState({redirect: true});
           
          })
          
      }

    render() {
        const { redirect } = this.state
        const { signup } = this.state
      return (
        <div className="login">
     
  <div className="heading">
    <h2>Sign in</h2>
    <form onSubmit={this.handleSubmit.bind(this)}>

            <div className="input-group input-group-lg">
                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                <input type="text" className="form-control" name="userName" required   
                placeholder="Username or email" onChange={this.handleChange}/>
                </div>

                <div className="input-group input-group-lg">
                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                <input type="password" className="form-control" name="password"  required 
                 placeholder="Password" onChange={this.handleChange}/>
                </div>

                <button type="submit" className="float">Login</button>
                <button  className="float" onClick={this.handleCheck.bind(this)}>Sign Up</button>
                
                {redirect &&
                    <Redirect to = {{pathname:'/dashboard'}}/>}

                {signup &&
                    <Redirect to = {{pathname:'/register'}}/>}
             
        

    </form>
 		</div>
 </div>
        
      );
    }
  }
  
  export default Login;