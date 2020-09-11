import React from 'react';
import './App.scss';
import GraphView from './components/GraphView';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="app-container">
      <div className="d-flex">
        <div className="graph-container p-2">
          <GraphView />
        </div>
        <div className="tabs-container p-2">
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default App;
