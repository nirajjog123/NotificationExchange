import React, { Component } from 'react'
import axios from 'axios';
import {Redirect} from 'react-router';

class Sms extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      msg : '',
      template :'',
      listRoute: false,
      templateNameReceived :'',
      templateName:''
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
    let obj = {
      l1evaluate: this.state.template,
      l1seniority: this.state.msg
    }
    console.log("obj ", obj);
    

    this.setState({ from: true });
    let msg = this.state.msg;
    let config = {
      headers: { 'authorization': localStorage.getItem('tokenId') }
    };
    axios.post('api/template/sms', {
      smsTemplate: { message: msg },
      tenantId: 123,
      templateName: 'demoTemplate'
    }, config)
      .then((response) => {
        console.log(response);
        this.setState({listRoute: true});
      })

  }

  handleCancel(){
    this.setState({listRoute: true});
  }
  render() {
    const {listRoute} = this.state
    
    const editTemplateName = (this.props.editData ===undefined)? (
      <input className="form-control noDisplay" type="textArea" name="template" required placeholder="Name"
              onChange={this.handleChange} />
    ) : (
      <div>{this.props.editData.templatename}</div>
    );

    const editMessage = (this.props.editData ===undefined)? (
      <input className="form-control" type="textArea" name="msg" required placeholder="write here"
      onChange={this.handleChange} />
    ) : (
      <div>{this.props.editData.message}</div>
    );

    return (
      <div className="margin-t-30 sms">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label >Template Name</label>
           
            {editTemplateName}
              
          </div>
          <div className="form-group">
            <label >Message</label>
            {editMessage}
          </div>
          <button type="submit" className="btn margin-r-20 savebtn">Save</button>
          <button className="btn cancelbtn" onClick={this.handleCancel}>Cancel</button>
        </form>
        {listRoute &&<Redirect to={{ pathname: '/notification' }} />}
      </div>
    );
  }
}

export default Sms;