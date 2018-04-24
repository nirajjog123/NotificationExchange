import React, { Component } from 'react'
import Chart from 'react-c3js'
import 'c3/c3.css';
import Graph3 from '../graph/graph3';
import Graph4 from '../graph/graph4';
import Graph5 from '../graph/graph5';
import Graphinfo from '../graph/graphinfo';
import chartData from "../../chartsStaticData/chartData"

class Graphcombo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: 'donut'
    };
    this.data = {
      columns: this.props.pieChart,
      type: 'pie',
      donut: {
        title: 'No of notifications sent'
      }
    };
  }
  render() {
    return (
      <div className="graphcombo">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="mr-5">Notification bar</div>
              </div>
              <div>
                <Graph4 areaChart={chartData.areaChart} />
              </div>
            </div>
            <div className="margin-t-20 clr">
              <Graphinfo />
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="mr-5">Notification Sent Today</div>
              </div>
              <Graph5 pieChart={chartData.pieChart} />
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="mr-5">Notification bar</div>
              </div>
              <Graph3 barChart={chartData.barChart} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Graphcombo;