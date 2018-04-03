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
        <div className="login">
     
        <div className="heading">
          <h2>Register User</h2>
          <form onSubmit={this.handleSubmit}>
      
                  <div className="input-group input-group-lg">
                      <span className="input-group-addon"><i className="fa fa-user"></i></span>
                      <input type="text" className="form-control" name="userName" id='username' required  
                      placeholder="Username or email" onChange={this.handleChange}/>
                      </div>
      
                      <div className="input-group input-group-lg">
                      <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                      <input type="password" className="form-control" name="password" id="password"
                        placeholder="Password" onChange={this.handleChange} required/>
                      <input type="password" className="form-control" name="re-password" id="re-password" required
                       placeholder="Re-enter Password" onChange={this.handleChange}/>
                      <input type="text" className="form-control" name="mobileNo" id="mobileNo" required
                       placeholder="enter mobile no" onChange={this.handleChange}/>
                      </div>
      
                      
                      <button type='submit' className="float">Register</button>
      
                      {register_user &&
                          <Redirect to = {{pathname:'/dashboard'}}/>}
                   
              
      
          </form>
               </div>
       </div>
    );
  }
}

export default Register;