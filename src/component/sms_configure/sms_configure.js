import React, { Component } from 'react'
import axios from 'axios';

class Sms_msg_configure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      })

  }
  render() {


    return (
      <div className="margin-t-30 sms">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label >Message</label>
            <input className="form-control" type="textArea" name="msg" required placeholder="write here"
              onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn margin-r-20 savebtn">Save</button>
          <button className="btn cancelbtn">Cancel</button>
        </form>
      </div>
    );
  }
}

export default Sms_msg_configure;