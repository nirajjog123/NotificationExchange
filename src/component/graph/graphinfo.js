import React, { Component } from 'react'
import '../graph/charts.css';

class Graphinfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="graphinfo">
          <div>
            <h5>{this.props.boxText} </h5>
          </div>
      </div>
    );
  }
}

export default Graphinfo;