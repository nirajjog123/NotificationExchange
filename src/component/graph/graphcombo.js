import React, { Component } from 'react'
import Chart from 'react-c3js'
import 'c3/c3.css';
import BarChart from '../graph/barChart';
import AreaChart from '../graph/areaChart';
import PieChart from '../graph/pieChart';
import Graphinfo from '../graph/graphinfo';
import chartStaticData from "../../chartsStaticData/chartData"

class Graphcombo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="graphcombo">
        <div class="row">         
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="mr-5">Notification Response timings</div>
              </div>
              <div>
                <AreaChart areaChart={chartStaticData.chartData.areaChart} />
              </div>
            </div>
            <div className="margin-t-20 clr">
              <Graphinfo boxText = {chartStaticData.chartTextBox.areaSummaryInfo}/>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body">
                <div class="mr-5">Notification Responses  </div>
              </div>
              <PieChart pieChart={chartStaticData.chartData.pieChart} />
            </div>
            <div className="margin-t-20 clr">
              <Graphinfo boxText = {chartStaticData.chartTextBox.pieSummaryInfo}/>
            </div>            
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body">
                <div class="mr-5">Notification Sent over different Channels</div>
              </div>
              <BarChart barChart={chartStaticData.chartData.barChart} />
            </div>
            <div className="margin-t-20 clr">
              <Graphinfo boxText = {chartStaticData.chartTextBox.barSummaryInfo}/>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default Graphcombo;