import React, { Component } from 'react'
import axios from 'axios';
import {Redirect} from 'react-router';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      subject: '',
      msg: '',
      listRoute: false,
      template:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ from: true });
    let from = this.state.from;
    let sub = this.state.subject;
    let message = this.state.msg;
    let templateIdString= '';
    let tNameString = '';

    //diffrentiate save and s&close button
    const value = event.target.value;
    const name = event.target.name;


      //set template name
      if(this.props.editData){
        this.setState({ template: this.props.editData.templateName });
        tNameString = this.props.editData.templateName;
        templateIdString = this.props.editData._id;
      }else if(this.props.templateId.data){
        this.setState({ template: this.props.templateId.data.templateName });
        templateIdString = this.props.templateId.data._id;
        tNameString = this.props.templateId.data.templateName;
      }
      let configuredTName = tNameString;

    let config = {
      headers: { 'authorization': localStorage.getItem('tokenId') }
    };
        axios.patch('api/template/email/'+templateIdString,{
            emailTemplate: {
                        fromEmailAddress: from,
                        subject: sub,
                        message: message
                            },
                templateName:configuredTName
        },config)
          .then( (response) => {
            NotificationManager.info('Email Section', 'Email template stored successfully', 3000);
            console.log(response);
            if(name==='close'){
              this.setState({listRoute: true});
             }
          })
          .catch(function (error) {
            NotificationManager.warning('Warning message', 'Error in Email template saving', 3000);
            console.log('ERROR',error);
          });       
  }

  handleCancel(){
    this.setState({listRoute: true});
  }
  render() {
    const {listRoute} = this.state
    
    let templateDta = '';
    let templateFrom='';
    let templateSub = '';
    if(this.props.editData && this.props.editData.emailTemplate){
     templateDta =  this.props.editData.emailTemplate.message ;
     templateFrom =this.props.editData.emailTemplate.fromEmailAddress ;
     templateSub = this.props.editData.emailTemplate.subject ;
    }

    //message
    const editMessage = (this.props.editData ===undefined)? (
      <textarea className="form-control" type="textArea" name="msg" required
      placeholder="write here" onChange={this.handleChange} ></textarea>
    ) : (
      <textarea className="form-control" type="textArea" name="msg" required
      placeholder="write here" onChange={this.handleChange} >{templateDta}</textarea>
    );

    //from message
    const editFrom = (this.props.editData ===undefined)? (
      <textarea className="form-control" name="from"  required placeholder="from sender"
              onChange={this.handleChange} ></textarea>
    ) : (
      
      <textarea className="form-control" name="from"  required placeholder="from sender"
              onChange={this.handleChange} >{templateFrom}</textarea>
    );


    //subject
    const editSubject = (this.props.editData ===undefined)? (
            <input className="form-control" type="text" name="subject" required
              placeholder="email subject" onChange={this.handleChange} />
      
    ) : (
      <textarea className="form-control" type="text" name="subject" required
              placeholder="email subject" onChange={this.handleChange}  >{templateSub}</textarea>
    );

    return (
      <div className="margin-t-30 email">
        <form >
          <div className="form-group">
            <label >From</label>
            {editFrom}
          </div>
          <div className="form-group">
            <label >Subject</label>

              {editSubject}
          </div>
          <div className="form-group">
            <label >Message</label>
            {editMessage}
          </div>
          <button type="submit" className="btn margin-r-20 savebtn" onClick={this.handleSubmit}>Save</button>
          <button className="btn cancelbtn margin-r-20" onClick={this.handleCancel}>Cancel</button>
          <button type="submit" className="btn margin-r-20 savebtn" name='close' onClick={this.handleSubmit}>Save&Close</button>
        </form>
        {listRoute &&<Redirect to={{ pathname: '/notification' }} />}
      </div>
    );
  }
}
  

export default Email;