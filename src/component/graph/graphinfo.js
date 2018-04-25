import React, { Component } from 'react'
import '../graph/Graph.css';

class Graphinfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="graphinfo">
          <div>
            <h6>{this.props.boxText} </h6>
          </div>
      </div>
    );
  }
}

export default Graphinfo;