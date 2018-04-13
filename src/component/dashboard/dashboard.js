import React, { Component } from 'react';
import './Dashboard.css';
import Quota from './Quota';



class Dashboard extends Component {
  
  render() {
  
    return (
      <div className="col-md-12 demo-div heading-section defaultAlign">
      
        <div className="margin-t-60">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Quota />
          </div>
          {}
        </div>
      </div>
    );
  }
}

export default Dashboard;