import React, { Component } from 'react';
import './dashboard.css';
import Header from './Header';
import Quota from './Quota';
import Chart from './Chart';
import Message from '../msg_configure/msg_configure';


class Dashboard extends Component {

  render() {
    return (

   
      <div className="col-md-12 demo-div heading-section defaultAlign">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Header />
        </div>
        <div className="margin-t-60">
          {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Quota />
          </div> */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 defaultAlign">
            <Message />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;