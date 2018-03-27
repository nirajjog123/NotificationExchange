import React, { Component } from 'react';
import { router,Redirect,Route } from 'react-router'
//import '../dashboard/dashboard'
import './login.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {userName: '',
                      password:'',
                    'redirect':false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


      handleChange(event) {
          if(event.target.name){
           if(event.target.name ==='username')   
           this.setState({userName: event.target.value});
          }else if(event.target.name ==='password')
        this.setState({password: event.target.value});
      }
      

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.userName);
        event.preventDefault();
        this.setState({redirect: true});
       
    //    <Route exact path="/" render={() => (
    //        this.state.redirect ? (
    //           <Redirect to="../dashboard/dashboard.js"/>
    //         ):(
                
    //         ) 
    //       )}/>

        //router.push('../dashboard/dashboard.js');
        <Route path="../dashboard/dashboard.js"/>
      }

    render() {
        const { redirect } = this.state
      return (
        <div className="login">
     
  <div className="heading">
    <h2>Sign in</h2>
    <form onSubmit={this.handleSubmit}>

            <div className="input-group input-group-lg">
                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                <input type="text" className="form-control" name="username"   
                placeholder="Username or email" onChange={this.handleChange}/>
                </div>

                <div className="input-group input-group-lg">
                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                <input type="password" className="form-control" name="password"  placeholder="Password" onChange={this.handleChange}/>
                </div>

                <button type="submit" className="float">Login</button>
             
        

    </form>
 		</div>
 </div>
        
      );
    }
  }
  
  export default Login;