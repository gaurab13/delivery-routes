import React, { useState, useContext } from 'react';
import { store } from '../../Context';
import './index.scss';

const RouteForm = () => {
  const { state, dispatch } = useContext(store);
  const routes = state.routes;
  const [routeInput, setRouteInput] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleChange = (evt) => {
    setRouteInput(evt.target.value);
    setInputError(false);
  };

  const routeExists = () => {
    return routes.some((route) => route.substring(0, 2) === routeInput.substring(0, 2));
  };

  const handleClick = () => {
    if (/^([A-Z][A-Z])\d$/.test(routeInput) && routeInput[0] !== routeInput[1] && !routeExists()) {
      dispatch({ type: 'ADD_SINGLE_NODE', payload: routeInput });
      setRouteInput('');
    } else {
      setInputError(true);
    }
  };

  return (
    <div className="mt-4">
      <div className="routes-info">
        <h5>Current Routes</h5>
        <div className="current-routes">
          <p>{routes.join(', ')}</p>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="route-input">New Route</label>
        <input
          type="text"
          className={`form-control ${inputError ? 'error' : ''}`}
          id="route-input"
          onChange={handleChange}
          value={routeInput}
          autoComplete={'off'}
        />
        <small id="route-input-help" className="form-text text-muted">
          It should be of appropriate format like AB1
        </small>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default RouteForm;
