import React, { Component } from 'react'
import Chart from 'react-c3js'
import 'c3/c3.css';

const data = {
   x:'x', 
  columns: [
        ['x', '2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05', '2018-01-06', '2018-01-07', '2018-01-08', '2018-01-09', '2018-01-10', '2018-01-11', '2018-01-12'],
        ['SMS', 30, 200, 100, 400, 150, 250,30, 200, 100, 400, 150, 250],
        ['EMAIL', 130, 340, 200, 500, 250, 350, 130, 340, 200, 500, 250, 350],
        ['PUSH', 400, 500, 450, 700, 600, 500, 400, 500, 450, 700, 600, 500]
  ],
  type : 'line'
};

const axisData ={
    x: {
        type: 'timeseries',
        tick: {
        format: '%Y-%m-%d'
        }
    }    
}
class Graph2 extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      chartType: 'line'
    };
  }
  render() {
    return (
      <div className="dashboard-component container">
        <div id="testchart"></div>
        <Chart
          data={data}
          chartType={this.state.chartType} axis={axisData} />
            
      </div>
    );
  }
}

export default Graph2;