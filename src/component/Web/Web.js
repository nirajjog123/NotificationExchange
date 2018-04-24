import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';

class Queue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      listRoute: false,
      templateName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }


  handleSubmit(event) {
   event.preventDefault();
    let msg = this.state.msg;
    let templateIdString= '';
    let tNameString = '';
    this.setState({ from: true });

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
    
    //set header for authorization
    let config = {
      headers: { 'authorization': localStorage.getItem('tokenId') }
    };


    axios.patch('api/template/web/'+ templateIdString , {
      webTemplate: { message: msg },
      templateName: configuredTName
    }, config)
      .then((response) => {
        NotificationManager.info('Mobile PUSH Section', 'WEB PUSH template stored successfully', 3000);
        console.log(response);
        if(name==='close'){
           this.setState({listRoute: true});
        }
      })
      .catch(function (error) {
        NotificationManager.warning('Error in WEB PUSH template saving', 3000);
        console.log('ERROR',error);
      });       

  }

  handleCancel(){
    this.setState({listRoute: true});
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }
  render() {


    const {listRoute} = this.state
    let templateDta = ''
      
          if(this.props.editData && this.props.editData.webTemplate){
             templateDta =  this.props.editData.webTemplate.message;
          }

    const editMessage = (this.props.editData ===undefined)? (
      <textarea className="form-control" type="textArea" name="msg" required placeholder="write here"
      onChange={this.handleChange} ></textarea>
    ) : (
      <textarea className="form-control" type="textArea" name="msg" required placeholder="write here"
      onChange={this.handleChange}  >{templateDta}</textarea>
    );
    return (
      <div className="margin-t-30 web">
        <form >
         
          <div className="form-group">
            <label >Messageeee</label>
            {editMessage}
          </div>
          <button  className="btn  cancelbtn margin-r-20 savebtn" onClick={this.handleSubmit}>Save</button>
          <button  className="btn cancelbtn margin-r-20" onClick={this.handleCancel}>Cancel</button>
          <button  className="btn cancelbtn  savebtn" name='close' onClick={this.handleSubmit}>Save & Close</button>
        </form>
        {listRoute && <Redirect to={{ pathname: '/notification' }} />}
      </div>
    );
  }
}

export default Queue;