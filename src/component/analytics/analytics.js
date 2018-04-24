import React, { Component } from 'react';
import './analytics.css';
import Graphcombo from '../graph/graphcombo';


class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      animationClass1: 'animation1',
      animationClass2: 'animation2',
    };

    setInterval(() => {
      let animationClass1 = this.state.animationClass1 == 'animation1' ? 'animation2' : 'animation1';
      let animationClass2 = this.state.animationClass2 == 'animation2' ? 'animation1' : 'animation2';
      this.setState({
        animationClass1,
        animationClass2,
      });
    }, 2000);
  }
  render() {
    return (
      <div className="col-md-12 col-lg-12 dashboard ">
        <div className="margin-t-75">
          <div className="margin-t-30"><Graphcombo /></div>
          <div className="margin-t-30"><Graphcombo /></div>
          <div className="margin-t-30"><Graphcombo /></div>
        </div>
      </div>
    );
  }
}

export default Analytics;