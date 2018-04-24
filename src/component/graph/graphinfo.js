import React, { Component } from 'react'
import '../graph/graph.css';


class Graphinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    this.data = {
    
    };
  }
  render() {
    return (
      <div className="graphinfo">
          <div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
               Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                 Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim.
               Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
               In enim justo, rhoncus ut, </p>
          </div>
      </div>
    );
  }
}

export default Graphinfo;