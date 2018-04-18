
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

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

      let templateDta = this.props.editData ? this.props.editData.templatename :'';
      const editTemplateName = (this.props.editData ===undefined)? (
        <input className="form-control noDisplay" type="textArea" name="template" required placeholder="Name"
                onChange={this.handleChange} />
      ) : (
        <div>{this.props.editData.templatename}</div>
      );
  
      const editMessage = (this.props.editData ===undefined)? (
        <input className="form-control"  type="textArea" name="msg"  required  placeholder="write here" 
            onChange={this.handleChange} />
      ) : (
        <input className="form-control"  type="textArea" name="msg"  required  placeholder="write here" 
        onChange={this.handleChange} value= {templateDta}/>
      );

    return (
      <div className="margin-t-30 queue">
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
          <button  className="btn cancelbtn" onClick={this.handleCancel}>Cancel</button>
        </form>
        {listRoute && <Redirect to={{ pathname: '/notification' }} />}
      </div>
    );
  }
}

export default Queue;