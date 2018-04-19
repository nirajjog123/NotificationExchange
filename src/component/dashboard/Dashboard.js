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
       animationClass2: 'animation2',
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
<div className="col-md-12 demo-div dashboard defaultAlign">
<div className="margin-t-60">
  <div className="row">
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <div className="widget widget-card">
        <div className="widget-body">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <span class="widget-icon">
                <i className="fa fa-address-book text-primary"></i>                        
              </span>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <div className={this.state.animationClass1}>
                <h6 className="no-margin defaultAlign">Quota</h6>
                <p className="fw-normal defaultAlign">12,324</p>
              </div>
              <div className={this.state.animationClass2}>
                <h6 className="no-margin defaultAlign">User</h6>
                <p className="fw-normal defaultAlign">23,654</p>
              </div>  
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>text1</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>text2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <div className="widget widget-card">
        <div className="widget-body">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <span class="widget-icon">
                <i className="fa fa-area-chart text-success"></i>                        
              </span>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <div className={this.state.animationClass1}>
                <h6 className="no-margin defaultAlign">Quota</h6>
                <p className="fw-normal defaultAlign">12,324</p>
              </div>
              <div className={this.state.animationClass2}>
                <h6 className="no-margin defaultAlign">User</h6>
                <p className="fw-normal defaultAlign">23,654</p>
              </div>  
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>text1</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>text2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <div className="widget widget-card">
        <div className="widget-body">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <span class="widget-icon">
                <i className="fa fa-info-circle text-gray"></i>                        
              </span>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <div className={this.state.animationClass1}>
                <h6 className="no-margin defaultAlign">QUOTA</h6>
                <p className="fw-normal defaultAlign">12,324</p>
              </div>
              <div className={this.state.animationClass2}>
                <h6 className="no-margin defaultAlign">USER</h6>
                <p className="fw-normal defaultAlign">23,654</p>
              </div>  
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>text1</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>text2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div class="card">
        <div class="card-body">
          <div class="mr-5">Quota</div>
        </div>
        <Graph />
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div class="card">
        <div class="card-body">
          <div class="mr-5">Quota</div>
        </div>
        <Graph2 />
      </div>
    </div>
  </div>
  <div class="row">
            Todays top 5 SMS sent
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

              <Grid />
            </div>          
          </div>  
</div>
</div>    );
  }
}

export default Dashboard;