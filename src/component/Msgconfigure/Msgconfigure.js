import React, { Component } from 'react';
import axios from 'axios';
import Sms from '../Sms/Sms';
import Email from '../Email/Email';
import Queue from '../Queue/Queue';

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      template: '',
      tempId:'',
      sms: true,
      email: false,
      queue: false
    };  
    this.handleCheck = this.handleCheck.bind(this);   
    this.setTemplate = this.setTemplate.bind(this);   
    this.handleChange = this.handleChange.bind(this);   
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

  setTemplate(event){
    event.preventDefault();
    let tName = this.state.template; 
    let respData = '';

    let config = {
      headers: { 'authorization': localStorage.getItem('tokenId') }
    };
    axios.post('api/template', {
      templateName: tName
    }, config)
      .then((response)=> 
      {
        console.log(response.data);
        this.setState({tempId :response.data})
        respData =response.data;
      },this)
    
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
    const { queue ,tempId } = this.state

    let edtTempName = this.props.location.state ? this.props.location.state.templateName:'';
    //conditional render for template name
    const editTempRender = (this.props.location.state ===undefined)? (
      <div>
      <input className="form-control " type="text" name="template" onChange={this.handleChange}
      required placeholder="Name" />
      <button onClick={this.setTemplate}  className="btn">OK</button>
      </div>
    ) : (
      <input className="form-control " type="text" name="template" onChange={this.handleChange}
            required placeholder="Name" value={edtTempName} />
    );

    return (
      <div className="margin-t-95 msgconfig">
      
        <div className="row">
          <div className="col-md-12 col-sm-12 col-md-2 col-lg-2">
          <div>
          <label>Template Name</label>
          {editTempRender}
          
          </div>
            <div className="graybkg">
              <div>
                <button onClick={this.handleCheck} name='sms' className="card-body btn-block msgbtn">SMS</button>
              </div>
              <div>
                <button onClick={this.handleCheck} name='email' className="card-body btn-block msgbtn">EMAIL</button>
              </div>
              <div>
                <button onClick={this.handleCheck} name='queue' className="card-body btn-block msgbtn">MOBILE NOTIFY</button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-md-4 col-lg-4">
            <div className={(tempId  ? 'show' : 'hidden')}>
              {sms && <Sms editData={ this.props.location.state} templateId={tempId}/>}
              {email && <Email editData={ this.props.location.state} templateId={tempId} />}
              {queue && <Queue editData={ this.props.location.state} templateId={tempId} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;