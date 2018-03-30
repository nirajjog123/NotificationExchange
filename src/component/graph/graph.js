import React,{Component} from 'react'
import Chart from 'react-c3js'
import 'c3/c3.css';

const data = {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ]
  };


class graph extends Component {
    constructor(props) {
        super(props);
        this._setBarChart = this._setBarChart.bind(this);
        this._setLineChart = this._setLineChart.bind(this);
        this.state = {
          chartType: 'line'
        };

        
      }
      _setBarChart() {
        this.setState({ chartType: 'bar' });
      }
      _setLineChart() {
        this.setState({ chartType: 'line' });
      }
    //   componentDidMount() {
    //     this._updateChart();
    //   }
    //   componentDidUpdate() {
    //     this._updateChart();
    //   }
    //   _updateChart() {
    //     const Charts = Chart.generate({
    //       bindto: '#testchart',
    //       data: {
    //         columns: this.props.columns,
    //         type: this.props.chartType
    //       }
    //     });
    //   }

    render() {
       
    return (
        <div className="dashboard-component container">
        <div id="testchart"></div>
        <Chart 
          
          data={data}
          chartType={this.state.chartType} />
          <p>
          Chart Type
          <button onClick={this._setBarChart}>bar</button> 
          <button onClick={this._setLineChart}>Line</button>
        </p>
      </div>
    );
  }
}

export default graph;