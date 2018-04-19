import React, { Component } from 'react'
import axios from 'axios';
import {Redirect} from 'react-router';

class Sms extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      msg : '',
      template :'',
      listRoute: false
    }
    console.log(this.props)
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
    let msg = this.state.msg;
    let templateIdString= '';
    let tNameString = '';
    this.setState({ from: true });

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
    
    //set header for authorization
    let config = {
      headers: { 'authorization': localStorage.getItem('tokenId') }
    };


    axios.patch('api/template/sms/'+ templateIdString , {
      smsTemplate: { message: msg },
      templateName: configuredTName
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

    let templateDta = this.props.editData ? this.props.editData.templatename :'';
    
  

    const editMessage = (this.props.editData ===undefined)? (
      <input className="form-control" type="textArea" name="msg" required placeholder="write here"
      onChange={this.handleChange} />
    ) : (
      <input className="form-control" type="textArea" name="msg" required placeholder="write here"
      onChange={this.handleChange} value= {templateDta} />
    );

    return (
      <div className="margin-t-30 sms">
        <form onSubmit={this.handleSubmit}>
          
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