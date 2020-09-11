import React, { useState } from 'react';
import './index.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="tabs">
      <ul className="nav nav-tabs" role="tablist">
        <li className={`nav-item ${activeTab === 'tab1' ? 'active': ''}`}>
          <button className="nav-link" onClick={() => setActiveTab('tab1')}>Routes</button>
        </li>
        <li className={`nav-item ${activeTab === 'tab2' ? 'active': ''}`}>
          <button className="nav-link" onClick={() => setActiveTab('tab2')}>Case 1</button>
        </li>
        <li className={`nav-item ${activeTab === 'tab3' ? 'active': ''}`}>
          <button className="nav-link" onClick={() => setActiveTab('tab3')}>Case 2</button>
        </li>
      </ul>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'tab1' ? 'active' : ''}`}>
          Tab Content Home
        </div>
        <div className={`tab-pane ${activeTab === 'tab2' ? 'active' : ''}`}>
          Tab Content 1
        </div>
        <div className={`tab-pane ${activeTab === 'tab3' ? 'active' : ''}`}>
          Tab Content 2
        </div>
      </div>
    </div>
  )
};

export default Tabs;
