import React from 'react';
import './App.scss';
import Graph from './Components/Graph';
import Tabs from './Components/Tabs';

function App() {
  return (
    <div className="app-container">
      <div className="d-flex">
        <div className="graph-container p-2">
          <Graph />
        </div>
        <div className="tabs-container p-2">
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default App;
