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
 pushNotificationCount :12000,
 pushNotificationQuota: 10000,
 emailNotificationCount :22324,
 emailNotificationQuota: 20654,
 smsNotificationCount :10123,
 smsNotificationQuota: 8654,
 animationClass1: 'animation1', 
 animationClass2: 'animation2',
 }; 

 setInterval(() => {
 let pushNotCount = this.state.pushNotificationCount, pushNotQuota= this.state.pushNotificationQuota;
 let emailNotCount = this.state.emailNotificationCount, emailNotQuota= this.state.emailNotificationQuota;
 let smsNotCount = this.state.smsNotificationCount, smsNotQuota= this.state.smsNotificationQuota; 
 pushNotCount++; 
 emailNotCount++;
 smsNotCount++;
 pushNotQuota--; 
 emailNotQuota--;
 smsNotQuota--;
 let animationClass1 = this.state.animationClass1 == 'animation1' ? 'animation2' : 'animation1';
 let animationClass2 = this.state.animationClass2 == 'animation2' ? 'animation1' : 'animation2';
 this.setState({
 animationClass1,
 animationClass2,
 pushNotificationCount : pushNotCount,
 pushNotificationQuota : pushNotQuota,
 emailNotificationCount : emailNotCount,
 emailNotificationQuota : emailNotQuota,
 smsNotificationCount : smsNotCount,
 smsNotificationQuota : smsNotQuota 
 });
 }, 2000);
 } 
 render() {
 return (
<div className="col-md-12 col-lg-12 dashboard">
 <div className="row margin-t-75">
 <div className="col-lg-4">
 <section className="widget">
 <header>
 <h6 className="headerText">
 PUSH NOTIFICATION
 </h6>
 <div className="widget-controls">
 <a href="#"><i className="fa fa-cog"></i></a>
 </div>
 </header>
 <div className="widget-body">
 <div className="stats-row">
 <div className="stat-item">
 <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center"><span className="widget-icon"><i className="fa fa-bell text-primary"></i></span></div></div>
 <div className="stat-item">
 
 
 <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5"><div className="animation2"><h6 className="no-margin text-center">Count</h6><p className="fw-normal">17011</p></div></div></div>
 <div className="stat-item">
 <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"><div className="animation2"><h6 className="no-margin text-center">Quota</h6><p className="fw-normal">2999</p></div></div></div>
 </div>
 <div className="bg-gray-lighter progress-xs progress ">
 <div className="progress-bar3 bg-success"></div>
 </div>
 <p>
 <span className="circle bg-warning text-white"><i className="la la-chevron-up"></i></span>
 <span className="fw-semi-bold">32% higher </span>
  than last month</p>
 </div>
 </section>
 </div>
 <div className="col-lg-4">
 <section className="widget">
 <header>
 <h6 class="headerText">
 SMS NOTIFICATION
 </h6>
 <div className="widget-controls">
 <a href="#"><i className="fa fa-cog"></i></a>
 </div>
 </header>
 <div className="widget-body">
 <div className="stats-row">
 <div className="stat-item">
 <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center"><span className="widget-icon"><i className="fa fa-envelope-open text-success"></i></span></div></div>
 <div className="stat-item">
 
 
 <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5"><div className="animation2"><h6 className="no-margin text-center">Count</h6><p className="fw-normal">6236</p></div></div></div>
 <div className="stat-item">
 <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"><div className="animation2"><h6 className="no-margin text-center">Quota</h6><p className="fw-normal">13765</p></div></div></div>
 </div>
 <div className="bg-gray-lighter progress-xs progress ">
 <div className="progress-bar2 bg-primary"></div>
 </div>
 <p>
 <span className="circle bg-warning text-white"><i className="la la-chevron-up"></i></span>
 <span className="fw-semi-bold">26% higher </span>
 than last month</p>
 </div>
 </section>
 </div>
 <div className="col-lg-4">
 <section className="widget">
 <header>
 <h6 class="headerText">
 EMAIL NOTIFICATION
 </h6>
 <div className="widget-controls">
 <a href="#"><i className="fa fa-cog"></i></a>
 </div>
 </header>
 <div className="widget-body">
 <div className="stats-row">
 <div className="stat-item">
 <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center"><span className="widget-icon"><i className="fa fa-envelope text-orange"></i></span></div></div>
 <div className="stat-item">
 
 
 <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5"><div className="animation2"><h6 className="no-margin text-center">Count</h6><p className="fw-normal">8000</p></div></div></div>
 <div className="stat-item">
 <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"><div className="animation2"><h6 className="no-margin text-center">Quota</h6><p className="fw-normal">12000</p></div></div></div>
 </div>
 <div className="bg-gray-lighter progress-xs progress ">
 <div className="progress-bar1 bg-danger"></div>
 </div>
 <p>
 <span className="circle bg-warning text-white"><i className="la la-chevron-up"></i></span>
 <span className="fw-semi-bold">17% higher </span>
 than last month</p>
 </div>
 </section>
 </div>
 </div>

 <div className="row">
 <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
 <section className="widget">
 <header>
 <h6 class="headerText"><span className="badge bg-danger">TOP 10</span> MESSAGES</h6>
 <div className="widget-controls">
 <a href="#"><i className="fa fa-cog"></i></a>
 </div>
 </header>
 <div className="widget-body p-0 messageBody scrollbar-deep-purple bordered-deep-purple thin">

 <div className="list-group list-group-lg">
 <a className="list-group-item" href="#">
 <span className="thumb-sm float-left mx-3 widget-icon">
 <i class="fa fa-envelope-open text-success"></i> 
 </span>
 <span className="no-margin">Stock Buy</span>
 <span className="no-margin"><i class="fa fa-line-chart text-green msg-btn" aria-hidden="true" id="analytics"></i></span>
 <span className="no-margin"><i class="fa fa-pencil text-primary msg-btn" aria-hidden="true"></i></span>
 <span className="no-margin"><i class="fa fa-trash text-orange msg-btn" aria-hidden="true"></i></span>
 <p className="help-block text-ellipsis no-margin">Thank you, we have received your purchase order</p> 
 </a>

 <a className="list-group-item" href="#">
 <span className="thumb-sm float-left mx-3 widget-icon">
 <i class="fa fa-bell text-primary"></i>
 </span>
 <span className="no-margin">Promotional Activity</span>
 <span className="no-margin"><i class="fa fa-line-chart text-green msg-btn" aria-hidden="true" id="analytics"></i></span>
 <span className="no-margin"><i class="fa fa-pencil text-primary msg-btn" aria-hidden="true"></i></span>
 <span className="no-margin"><i class="fa fa-trash text-orange msg-btn" aria-hidden="true"></i></span>
 <p className="help-block text-ellipsis no-margin">Hey! What's up? So many times since we</p> 
 </a>

 <a className="list-group-item" href="#">
 <span className="thumb-sm float-left mx-3 widget-icon">
 <i class="fa fa-envelope text-orange"></i> 
 </span>
 <span className="no-margin">Result Today</span>
 <span className="no-margin"><i class="fa fa-line-chart text-green msg-btn" aria-hidden="true" id="analytics"></i></span>
 <span className="no-margin"><i class="fa fa-pencil text-primary msg-btn" aria-hidden="true"></i></span>
 <span className="no-margin"><i class="fa fa-trash text-orange msg-btn" aria-hidden="true"></i></span>
 <p className="help-block text-ellipsis no-margin">Major stocks from Pharma are going to declare Today</p> 
 </a>

 <a className="list-group-item" href="#">
 <span className="thumb-sm float-left mx-3 widget-icon">
 <i class="fa fa-envelope-open text-success"></i> 
 </span>
 <span className="no-margin">Stock Sell</span>
 <span className="no-margin"><i class="fa fa-line-chart text-green msg-btn" aria-hidden="true" id="analytics"></i></span>
 <span className="no-margin"><i class="fa fa-pencil text-primary msg-btn" aria-hidden="true"></i></span>
 <span className="no-margin"><i class="fa fa-trash text-orange msg-btn" aria-hidden="true"></i></span>
 <p className="help-block text-ellipsis no-margin">Thank you, we have received your purchase order</p> 
 </a>

 <a className="list-group-item" href="#">
 <span className="thumb-sm float-left mx-3 widget-icon">
 <i class="fa fa-envelope-open text-success"></i> 
 </span>
 <span className="no-margin">Divident stocks</span>
 <span className="no-margin"><i class="fa fa-line-chart text-green msg-btn" aria-hidden="true" id="analytics"></i></span>
 <span className="no-margin"><i class="fa fa-pencil text-primary msg-btn" aria-hidden="true"></i></span>
 <span className="no-margin"><i class="fa fa-trash text-orange msg-btn" aria-hidden="true"></i></span>
 <p className="help-block text-ellipsis no-margin">Some of the automobile/ reality stocks may provide higher dividents this year</p> 
 </a>
 </div>


 </div>
 </section>
 </div>

 <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
 <section className="widget">
 <header>
 <h6 class="headerText">ANALYSIS</h6>
 </header>
 <div className="widget-body p-0">
 <Graph2 />
 </div>
 </section>
 </div>
 </div>


 {/* <div className="row">
 <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
 <section className="widget">
 <header>
 <h6 class="headerText">SENT TODAY</h6>
 <div className="widget-controls">
 <a href="#"><i className="fa fa-cog"></i></a>
 </div>
 </header>
 <div className="widget-body p-0">
 <Graph />
 </div>
 </section>
 </div>
 </div> */}

 {/* <div className="row">
 <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
 <div className="card">
 <div className="card-body">
 <div className="mr-5">Sent Today</div>
 </div>
 <Graph />
 </div>
 </div>
 <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
 <div className="card">
 <div className="card-body">
 <div className="mr-5">Analysis</div>
 </div>
 <Graph2 />
 </div>
 </div>
 </div> */}
 {/* <div className="row margin-t-30">
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
 <div className="card">
 <div className="card-body">
 <div>Todays Top 5 Notifications</div>
 </div>
 <Grid />
 </div>
 </div>
 </div>  */}
</div> 
);
 }
}

export default Dashboard;