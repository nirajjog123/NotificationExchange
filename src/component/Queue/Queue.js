
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


    axios.patch('api/template/device/'+ templateIdString , {
      deviceTemplate: { message: msg },
      templateName: configuredTName
    }, config)
      .then((response) => {
        console.log(response);
        if(name==='close'){
           this.setState({listRoute: true});
        }
      })

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
      
          if(this.props.editData && this.props.editData.smsTemplate){
             templateDta =  this.props.editData.smsTemplate.message;
          }

    const editMessage = (this.props.editData ===undefined)? (
      <textarea className="form-control" type="textArea" name="msg" required placeholder="write here"
      onChange={this.handleChange} ></textarea>
    ) : (
      <textarea className="form-control" type="textArea" name="msg" required placeholder="write here"
      onChange={this.handleChange}  >{templateDta}</textarea>
    );
    return (
      <div className="margin-t-30 queue">
        <form >
         
          <div className="form-group">
            <label >Message</label>
            {editMessage}
          </div>
          <button  className="btn margin-r-20 savebtn" onClick={this.handleSubmit}>Save</button>
          <button  className="btn cancelbtn" onClick={this.handleCancel}>Cancel</button>
          <button  className="btn margin-r-20 savebtn" name='close' onClick={this.handleSubmit}>Save&Close</button>
        </form>
        {listRoute && <Redirect to={{ pathname: '/notification' }} />}
      </div>
    );
  }
}

export default Queue;