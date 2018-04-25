import React, { Component } from 'react';
import './analytics.css';
import Graphcombo from '../graph/graphcombo';
import Graphcombo2 from '../graph/graphcombo2';
import chartStaticData from "../../chartsStaticData/chartData";
import DatePicker from 'react-datepicker';
// import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidebox: false,
    };
    this.showChartDetails = this.showChartDetails.bind(this);
  }
  showChartDetails() {
    this.setState({ hidebox: !this.state.hidebox });
  }
  
  render() {
    let templatename = this.props.location.state ? this.props.location.state.templatename : "";
   
    return (
      <div className="col-md-12 col-lg-12 analytics">

        <div className="margin-t-75">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                <button className="btn notificationBtn" onClick={this.showChartDetails}>More details about charts</button>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
               <h3>Template Name - {templatename}</h3>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <DatePicker className="datepicker" selected={this.state.date} onChange={this.handleChange} />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="margin-t-30"><Graphcombo /></div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {this.state.hidebox && <div>

              <div id="accordion">
                <div class="card">
                  <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#collapseOne">
                      SMS</a>
                  </div>
                  <div id="collapseOne" class="collapse show" data-parent="#accordion">
                    <div class="card-body">
                      <div className="margin-t-30"><Graphcombo2 chartStaticData={chartStaticData.smsChartsData} /></div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                      EMAIL</a>
                  </div>
                  <div id="collapseTwo" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                      <div className="margin-t-30"><Graphcombo2 chartStaticData={chartStaticData.emailChartsData} /></div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                      PUSH</a>
                  </div>
                  <div id="collapseThree" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                      <div className="margin-t-30"><Graphcombo2 chartStaticData={chartStaticData.pushChartsData} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;