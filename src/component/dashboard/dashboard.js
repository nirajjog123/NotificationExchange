import React, { Component } from 'react';
import './dashboard.css';
import Header from './Header';
import Quota from './Quota';
import Chart from './Chart';
import Message from '../msg_configure/msg_configure';


class Dashboard extends Component {
  // constructor() {
  //   super(props);
  //   this.state = {
  //     filter: {
  //       quota: true,
  //       message: false
  //     }
  //   }
  // }

  // activeHandle = () => {
  //   alert("11");
  //   this.setState({
  //     filter: {
  //       quota: true,
  //       message: false
  //     }
  //   })
  // }
  render() {
    // if (this.state.filter.quota) {
    //   alert("1");
    // } else if (this.state.filter.message) {
    //   alert("2");
    // }
    return (
      <div className="col-md-12 demo-div heading-section defaultAlign">
      
        <div className="margin-t-60">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Quota />
          </div>
          {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 defaultAlign">
            <Message />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;