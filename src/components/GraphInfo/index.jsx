import React from 'react';
import './index.scss';

const GraphInfo = () => {
  return (
    <div className="graph-info">
      <h3>Directed Graph</h3>
      <p>In this directed graph each node represents a town and an edge with weight represents the delivery cost for routing between two towns.</p> 
      <p>Towns are represented with first letters of the alphabet.
        Route between two Towns <span className="font-weight-bold">A</span> and <span className="font-weight-bold">B</span> 
        with the delivery cost 1 is represented as <span className="font-weight-bold">AB1</span></p>
      <p>Note: You can grab a node and adjust its position by moving it around in the graph.</p>
    </div>
  );
}

export default GraphInfo;
