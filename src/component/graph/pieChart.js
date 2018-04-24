import React, { Component } from 'react'
import Chart from 'react-c3js'
import 'c3/c3.css';

class PieChart extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      chartType: 'donut'
    };
    this.data = {
        columns: this.props.pieChart,
        type : 'pie',
        donut: {
          title: 'No of notifications sent'
        }
      };      
}
  render() {
    return (
      <div className="dashboard-component container">
        <div id="testchart"></div>
        <Chart
          data={this.data}
          chartType={this.state.chartType} />

      </div>
    );
  }
}

export default PieChart;