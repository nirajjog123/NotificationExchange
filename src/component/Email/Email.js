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
      //set template name
      if(this.props.editData){
        this.setState({ template: this.props.editData.templatename });
        tNameString = this.props.editData.templatename;
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
            console.log(response);

      })

  }

  handleCancel(){
    this.setState({listRoute: true});
  }
  render() {
    const {listRoute} = this.state

    let templateDta = this.props.editData ? this.props.editData.templatename :'';

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