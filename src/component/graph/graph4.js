import React, { Component } from 'react'
import Chart from 'react-c3js'
import 'c3/c3.css';

class Graph4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: 'Bar'
    };
    this.data = {
      x: 'x',
      columns: this.props.areaChart,
      type: 'area',
      groups: [
        ['SMS', 'EMAIL', 'PUSH']
      ]
    };
    
    this.axisData = {
      x: {
        type: 'timeseries',
        localtime: false,
        tick: {
          format: '%Y-%m-%d %H:%M:%S'
        }
      }
    }
    
  }
  render() {
    return (
      <div className="dashboard-component container">
        <div id="testchart"></div>
        <Chart
          data={this.data}
          chartType={this.state.chartType} axis={this.axisData} />

      </div>
    );
  }
}

export default Graph4;