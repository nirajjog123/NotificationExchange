import React, { Component } from 'react';
import Sms_msg_configure from '../sms_configure/sms_configure';
import Email_msg_configure from '../email_configure/email_configure';
import Queue_msg_configure from '../queue_configure/queue_configure';
import Header from '../dashboard/Header';


class msg_configure extends Component {

<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      template: '',
      sms: true,
      email: false,
      queue: false
    };

    this.handleCheck = this.handleCheck.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCheck(event) {
    if (event.target.name === 'sms') {
      this.setState({ sms: true, email: false, queue: false });
    } else if (event.target.name === 'email') {
      this.setState({ sms: false, email: true, queue: false });
    } else if (event.target.name === 'queue') {
      this.setState({ sms: false, email: false, queue: true });
    }

  }

  render() {
    const { sms } = this.state
    const { email } = this.state
    const { queue } = this.state
    return (
      <div className="margin-t-95 msgconfig">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Header />
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-md-2 col-lg-2">
            <div className="graybkg">
              <div>
                <button onClick={this.handleCheck.bind(this)} name='sms' className="card-body btn-block msgbtn">SMS</button>
              </div>
              <div>
                <button onClick={this.handleCheck.bind(this)} name='email' className="card-body btn-block msgbtn">EMAIL</button>
              </div>
              <div>
                <button onClick={this.handleCheck.bind(this)} name='queue' className="card-body btn-block msgbtn">QUEUE</button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-md-4 col-lg-4">
            <div id='message'>
              {sms && <Sms_msg_configure />}
              {email && <Email_msg_configure />}
              {queue && <Queue_msg_configure />}
            </div>
          </div>
        </div>


=======
    constructor(props) {
        super(props);
        this.state = {
                      template:'',
                      sms: false,
                      email:false,
                      queue:false
                    };
    
        this.handleCheck = this.handleCheck.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

      handleCheck(event){
          if(event.target.name === 'sms'){
            this.setState({sms: true,email:false,queue:false});
          }else if(event.target.name === 'email'){
            this.setState({sms: false,email:true,queue:false});    
          }else if(event.target.name === 'queue'){
            this.setState({sms: false,email:false,queue:true});    
          }
        
      }

      handleChange(event) {
        const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      });
      }

    render() {
        const { sms } = this.state 
        const { email } = this.state 
        const { queue } = this.state 
        const {template} = this.state
    return (
        <div className = "dashboard-component container">
        <div className="form-group">
            <label >Template Name</label>
            <input className="form-control"  type="text" name="template"  required  placeholder="write here" 
            onChange={this.handleChange} />
          </div>
        <div >
      <button onClick={this.handleCheck} name = 'sms' className="btn btn-primary btn-block">SMS</button>
      <button onClick={this.handleCheck} name = 'email' className="btn btn-primary btn-block">EMAIL</button>
      <button onClick={this.handleCheck} name = 'queue' className="btn btn-primary btn-block">QUEUE</button>
      </div>

      <div id='message'>

      {sms && <Sms_msg_configure templateName={template}/>}
      {email && <Email_msg_configure templateName={template}/>}
      {queue && <Queue_msg_configure templateName={template}/>}

      </div>
>>>>>>> updated code
      </div>
    );
  }
}

export default msg_configure;