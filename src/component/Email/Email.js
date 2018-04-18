import React, { Component } from 'react'
import axios from 'axios';
import {Redirect} from 'react-router';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      subject: '',
      msg: '',
      listRoute: false,
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
    this.setState({ from: true });
    let from = this.state.from;
    let sub = this.state.subject;
    let message = this.state.msg;
    let templateName = this.props.templateName
    let config = {
      headers: { 'authorization': localStorage.getItem('tokenId') }
    };
        axios.post('api/template/email',{
            emailTemplate: {
                        fromEmailAddress: from,
                        subject: sub,
                        message: message
                            },
                templateName:templateName
        },config)
          .then( (response) => {
            console.log(response);

      })

  }

  handleCancel(){
    this.setState({listRoute: true});
  }
  render() {
    const {listRoute} = this.state

    let templateDta = this.props.editData ? this.props.editData.templatename :'';

    const editTemplateName = (this.props.editData ===undefined)? (
      <input className="form-control noDisplay" type="textArea" name="template" required placeholder="Name"
              onChange={this.handleChange} />
    ) : (
      <div>{this.props.editData.templatename}</div>
    );

    const editMessage = (this.props.editData ===undefined)? (
      <input className="form-control" type="textArea" name="msg" required
      placeholder="write here" onChange={this.handleChange} />
    ) : (
      <input className="form-control" type="textArea" name="msg" required
      placeholder="write here" onChange={this.handleChange} value={templateDta} />
    );

    return (
      <div className="margin-t-30 email">
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label >Template Name</label>
           
            {editTemplateName}
              
          </div>
          <div className="form-group">
            <label >From</label>
            <input className="form-control" name="from" type='email' required placeholder="from sender"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label >Subject</label>
            <input className="form-control" type="text" name="subject" required
              placeholder="email subject" onChange={this.handleChange} />
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
  

export default Email;