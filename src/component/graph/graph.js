import React, { Component } from 'react'
import Chart from 'react-c3js'
import 'c3/c3.css';

const data = {
  columns: [
    ['data1', 30, 200, 100, 400, 150, 250],
    ['data2', 50, 20, 10, 40, 15, 25]
  ],
  type : 'pie'
};


class Graph extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      chartType: 'pie'
    };
  }
  render() {
    return (
      <div className="dashboard-component container">
        <div id="testchart"></div>
        <Chart
          data={data}
          chartType={this.state.chartType} />
      
      </div>
    );
  }
}

export default Graph;