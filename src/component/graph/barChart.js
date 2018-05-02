import React, { Component } from 'react'
import Chart from 'react-c3js'
import 'c3/c3.css';

class BarChart extends Component {
  constructor(props) {
    super(props);    
    this.data = {
      x:'x',
      xFormat: '%Y-%m-%d %H:%M:%S', 
     columns: this.props.barChart,
     type : 'bar',
     groups: [
       ['SMS', 'EMAIL','PUSH']
   ]
   };
   this.axisData ={
       x: {
           type: 'timeseries',
           tick: {
           format: '%H:%M:%S'
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
          axis={this.axisData} />
            
      </div>
    );
  }
}

export default BarChart;