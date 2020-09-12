import React from 'react';
import './App.scss';
import Graph from './Components/Graph';
import GraphInfo from './Components/GraphInfo';
import Tabs from './Components/Tabs';

function App() {
  return (
    <div className="app-container container-fluid">
      <div className="d-flex">
        <div className="graph-container p-2">
          <Graph />
        </div>
        <div className="tabs-container p-2">
          <GraphInfo />
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default App;
