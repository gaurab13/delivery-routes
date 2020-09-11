import React, { useContext } from 'react';
import CaseOne from '../CaseOne';
import RouteForm from '../RoutesForm';
import { store } from '../../Context';
import './index.scss';
import CaseTwo from '../CaseTwo';

const Tabs = () => {
  const { state, dispatch } = useContext(store);
  const activeTab = state.activeTab;

  return (
    <div className="tabs">
      <ul className="nav nav-tabs" role="tablist">
        <li className={`nav-item ${activeTab === 'routes-tab' ? 'active' : ''}`}>
          <button
            className="nav-link"
            onClick={() => dispatch({ type: 'SET_ACTIVE_TAB', payload: 'routes-tab' })}
          >
            Routes
          </button>
        </li>
        <li className={`nav-item ${activeTab === 'case-one-tab' ? 'active' : ''}`}>
          <button
            className="nav-link"
            onClick={() => dispatch({ type: 'SET_ACTIVE_TAB', payload: 'case-one-tab' })}
          >
            Case 1
          </button>
        </li>
        <li className={`nav-item ${activeTab === 'case-two-tab' ? 'active' : ''}`}>
          <button
            className="nav-link"
            onClick={() => dispatch({ type: 'SET_ACTIVE_TAB', payload: 'case-two-tab' })}
          >
            Case 2
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'routes-tab' ? 'active' : ''}`}>
          <RouteForm />
        </div>
        <div className={`tab-pane ${activeTab === 'case-one-tab' ? 'active' : ''}`}>
          <CaseOne />
        </div>
        <div className={`tab-pane ${activeTab === 'case-two-tab' ? 'active' : ''}`}>
          <CaseTwo />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
