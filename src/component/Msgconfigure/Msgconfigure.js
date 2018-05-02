import React, { Component } from 'react';
import axios from 'axios';
import Sms from '../Sms/Sms';
import Email from '../Email/Email';
import Queue from '../Queue/Queue';
import Web from '../Web/Web';

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      template: '',
      tempId: '',
      sms: true,
      email: false,
      queue: false,
      web: false,
      showMsgDom: false
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.setTemplate = this.setTemplate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCheck(event) {
    if (event.target.name === 'sms') {
      this.setState({ sms: true, email: false, queue: false, web: false });
    } else if (event.target.name === 'email') {
      this.setState({ sms: false, email: true, queue: false, web: false });
    } else if (event.target.name === 'queue') {
      this.setState({ sms: false, email: false, queue: true, web: false });
    } else if (event.target.name === 'web') {
      this.setState({ sms: false, email: false, queue: false, web: true });
    }

  }

  setTemplate(event) {
    event.preventDefault();
    let tName = this.state.template;
    let respData = '';

    // event.target.disabled = true;
    event.target.style.display = "none";
    this.setState({ showMsgDom: true });

    let config = {
      headers: { 'authorization': localStorage.getItem('tokenId') }
    };
    axios.post('api/template', {
      templateName: tName
    }, config)
      .then((response) => {
        console.log(response.data);
        this.setState({ tempId: response.data })
        respData = response.data;
      }, this)

  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  navClass(navItem) {
    let classNames = "button ";
    if(navItem) {
      classNames += "msgTabHighlight";
    }
    return classNames;
  }
  render() {
    const { sms } = this.state
    const { email } = this.state
    const { queue, tempId, web } = this.state
    let { showMsgDom } = this.state
    let edtTempName = this.props.location.state ? this.props.location.state.templateName : '';
    if (edtTempName) {
      showMsgDom = true;
    }
    //conditional render for template name
    const editTempRender = (this.props.location.state === undefined) ? (
      <div className='msgConfig'>
        <input className="form-control" type="text" name="template" onChange={this.handleChange}
          required placeholder="Name" />
        <button onClick={this.setTemplate} className="btn okbtn margin-t-20">OK</button>
      </div>
    ) : (
        <input className="form-control " type="text" name="template" onChange={this.handleChange}
          required placeholder="Name" value={edtTempName} />
      );

    return (
      <div className="margin-t-55 msgconfig">

        <div className="row">
          <div className="col-md-12 col-sm-12 col-md-1 col-lg-1">
            {showMsgDom && <div className="floatingmenu" id='msgOption' >
              <button type="button" className={this.navClass(this.state.sms)} onClick={this.handleCheck} name='sms'><div className="buttonicon"><i className="fa fa-bell text-red"></i></div><div className="buttonicontext">SMS</div></button>
              <button type="button" className={this.navClass(this.state.email)} onClick={this.handleCheck} name='email'><div className="buttonicon"><i className="fa fa-envelope-open text-success"></i></div><div className="buttonicontext">EMAIL</div></button>
              <button type="button" className={this.navClass(this.state.queue)} onClick={this.handleCheck} name='queue'><div className="buttonicon"><i className="fa fa-envelope text-orange"></i></div><div className="buttonicontext">QUEUE</div></button>
              <button type="button" className={this.navClass(this.state.push)} onClick={this.handleCheck} name='web'><div className="buttonicon"><i className="fa fa-mobile mobile text-red"></i></div><div className="buttonicontext">PUSH</div></button>
              {/* <ul>              
                <li className=""><a><i className="fa fa-bell text-primary" onClick={this.handleCheck} name='sms'></i></a></li>
                <li className=""><a><i className="fa fa-envelope-open text-success" onClick={this.handleCheck} name='email'></i></a></li>
                <li className=""><a><i className="fa fa-envelope text-orange" onClick={this.handleCheck} name='queue'></i></a></li>
                <li className=""><a><i className="fa fa-mobile mobile text-red" onClick={this.handleCheck} name='web'></i></a></li>
              </ul> */}
            </div>}
          </div>
          <div className="col-md-12 col-sm-12 col-md-11 col-lg-11">
            <div className="formalign">
              <div className="msgconfigmain margin-t-10">
                <label>Template Name</label>
                {editTempRender}
              </div>

              {showMsgDom && <div className={(tempId ? 'show' : 'hidden')}  >
                {sms && <Sms editData={this.props.location.state} templateId={tempId} />}
                {email && <Email editData={this.props.location.state} templateId={tempId} />}
                {queue && <Queue editData={this.props.location.state} templateId={tempId} />}
                {web && <Web editData={this.props.location.state} templateId={tempId} />}
              </div>}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Message;