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
           
      }
  

    render() {
       
    return (
        <div className="dashboard-component container">
        <div id="testchart"></div>
        <Chart        
          data={data}
          />
        
      </div>
    );
  }
}

export default graph;