import React, { Component } from 'react';
import './analytics.css';
import Graphcombo from '../graph/graphcombo';
import Graphcombo2 from '../graph/graphcombo2';
import chartStaticData from "../../chartsStaticData/chartData"


class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidebox: 'displaynone',
    };
    this.showChartDetails = this.showChartDetails.bind(this);
  }
  showChartDetails() {
    this.setState({ hidebox: 'displayblock' });
  }
  render() {
    return (
      <div className="col-md-12 col-lg-12 dashboard ">
        <div className="margin-t-75">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button className="btn notificationBtn" onClick={this.showChartDetails}>Details +</button>
          </div>
          <div className="margin-t-30"><Graphcombo /></div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className={this.state.hidebox}>
              <div className="margin-t-30"><Graphcombo2 chartStaticData={chartStaticData.smsChartsData} /></div>
              <div className="margin-t-30"><Graphcombo2 chartStaticData={chartStaticData.emailChartsData} /></div>
              <div className="margin-t-30"><Graphcombo2 chartStaticData={chartStaticData.pushChartsData} /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;