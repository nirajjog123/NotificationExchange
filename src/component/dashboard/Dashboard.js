import React, { Component } from 'react';
import './Dashboard.css';
import Quota from './Quota';
//import 'open-iconic/font/css/open-iconic-foundation.css';
import Graph from '../graph/graph';
import Graph2 from '../graph/graph2';
import Grid from "./Grid";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      animationClass1: 'animation1',
      animationClass2: 'animation2'    
    };

    setInterval(() => {
      let animationClass1 = this.state.animationClass1 == 'animation1' ? 'animation2' : 'animation1';
      let animationClass2 = this.state.animationClass2 == 'animation2' ? 'animation1' : 'animation2';
      this.setState({
        animationClass1,
        animationClass2,
      });
    }, 2000);
  }
  render() {
    return (
      <div className="col-md-12 col-lg-12 dashboard ">

        <div className="row dashboardalignment margin-t-75">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="widget widget-card">
              <div className="widget-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <span class="widget-icon">
                      <i className="fa fa-bell text-primary"></i>
                    </span>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div className={this.state.animationClass1}>
                      <h6 className="no-margin defaultAlign">Push Notification</h6>
                      <p className="fw-normal defaultAlign">12,324</p>
                    </div>
                    <div className={this.state.animationClass2}>
                      <h6 className="no-margin defaultAlign">Push Notification</h6>
                      <p className="fw-normal defaultAlign">23,654</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="widget widget-card">
              <div className="widget-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <span class="widget-icon">
                      <i className="fa fa-envelope-open text-success"></i>
                    </span>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div className={this.state.animationClass1}>
                      <h6 className="no-margin defaultAlign">Email</h6>
                      <p className="fw-normal defaultAlign">22,324</p>
                    </div>
                    <div className={this.state.animationClass2}>
                      <h6 className="no-margin defaultAlign">Email</h6>
                      <p className="fw-normal defaultAlign">24,654</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="widget widget-card">
              <div className="widget-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <span class="widget-icon">
                      <i className="fa fa-envelope text-gray"></i>
                    </span>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div className={this.state.animationClass1}>
                      <h6 className="no-margin defaultAlign">SMS</h6>
                      <p className="fw-normal defaultAlign">21,654</p>
                    </div>
                    <div className={this.state.animationClass2}>
                      <h6 className="no-margin defaultAlign">SMS</h6>
                      <p className="fw-normal defaultAlign">10,654</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="mr-5">Notification Sent Today</div>
              </div>
              <Graph />
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <div class="card">
              <div class="card-body">
                <div class="mr-5">Notification Analysis</div>
              </div>
              <Graph2 />
            </div>
          </div>
        </div>
        <div class="row margin-t-30">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="card">
              <div class="card-body marginauto">
                <div class="mr-5">Todays Top 5 Notifications</div>
              </div>
              <Grid onTransferAnalyticsData={this.transferAnalyticsData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;