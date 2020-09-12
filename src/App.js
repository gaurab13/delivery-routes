import React from 'react';
import './App.scss';
import Graph from './Components/Graph';
import GraphInfo from './Components/GraphInfo';
import Tabs from './Components/Tabs';

function App() {
  return (
    <div className="app-container p-1">
      <div className="d-flex h-100">
        <div className="tabs-container p-2">
          <GraphInfo />
          <Tabs />
        </div>
        <div className="graph-container p-2">
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default App;
