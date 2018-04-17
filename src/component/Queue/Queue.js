
import React,{Component} from 'react'
import axios from 'axios';
import {Redirect} from 'react-router';


class Queue extends Component {
    constructor(props) {
        super(props);
        this.state = {msg:'',
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
        this.setState({from: true});
        let msg = this.state.msg;
        let templateName = this.props.templateName
        let config = {
            headers: {'authorization': localStorage.getItem('tokenId')}
          };
        axios.post('api/template/queue',{
            smsTemplate: {message:msg},
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
        <div>{this.props.editData.message}</div>
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
          <button type="submit" className="btn btn-primary">Save</button>
          <button  className="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
        </form>
        {listRoute &&<Redirect to={{ pathname: '/notification' }} />}
      </div>
    );
  }
}

export default Queue;