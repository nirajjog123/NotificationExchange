import React, { Component } from 'react'
import Chart from 'react-c3js'
import 'c3/c3.css';
import BarChart from '../graph/barChart';
import AreaChart from '../graph/areaChart';
import PieChart from '../graph/pieChart';
import Graphinfo from '../graph/graphinfo';

class Graphcombo2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="graphcombo">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <h6 class="mr-5">{this.props.chartStaticData.areaChart.header}</h6>
              </div>
              <div>
                <AreaChart areaChart={this.props.chartStaticData.areaChart.data} />
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <h6 class="mr-5">{this.props.chartStaticData.pieChart.header}</h6>
              </div>
              <PieChart pieChart={this.props.chartStaticData.pieChart.data} />
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <h6 class="mr-5">{this.props.chartStaticData.barChart.header}</h6>
              </div>
              <BarChart barChart={this.props.chartStaticData.barChart.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Graphcombo2;