import React,{Component} from 'react'
import SMSMessage from '../sms_configure/sms_configure'
import EmailMessage from '../email_configure/email_configure'
import QueueMessage from '../queue_configure/queue_configure'


class msg_configure extends Component {

    constructor(props) {
        super(props);
        this.state = {sms: false,
                      email:false,
                      queue:false
                    };
    
        this.handleCheck = this.handleCheck.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleCheck(event){
          if(event.target.name === 'sms'){
            this.setState({sms: true,email:false,queue:false});
          }else if(event.target.name === 'email'){
            this.setState({sms: false,email:true,queue:false});    
          }else if(event.target.name === 'queue'){
            this.setState({sms: false,email:false,queue:true});    
          }
        
      }

    render() {
        const { sms } = this.state 
        const { email } = this.state 
        const { queue } = this.state 
    return (
        <div className = "dashboard-component container">
        <div >
      <button onClick={this.handleCheck.bind(this)} name = 'sms' className="btn btn-primary btn-block">SMS</button>
      <button onClick={this.handleCheck.bind(this)} name = 'email' className="btn btn-primary btn-block">EMAIL</button>
      <button onClick={this.handleCheck.bind(this)} name = 'queue' className="btn btn-primary btn-block">QUEUE</button>
      </div>

      <div id='message'>
      {sms && <SMSMessage/>}
      {email && <EmailMessage/>}
      {queue && <QueueMessage/>}
      </div>
      </div>
    );
  }
}

export default msg_configure;