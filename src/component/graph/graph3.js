import React, { Component } from 'react'
import Chart from 'react-c3js'
import 'c3/c3.css';

class Graph3 extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      chartType: 'Bar'
    };
    this.data = {
      x:'x', 
     columns: this.props.barChart,
     type : 'bar',
     groups: [
       ['SMS', 'EMAIL','PUSH']
   ]
   };
   console.log('this.props.barChart',this.props.barChart);
   this.axisData ={
       x: {
           type: 'timeseries',
           tick: {
           format: '%Y-%m-%d'
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

export default Graph3;