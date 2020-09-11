import React, { useState, useContext } from 'react';
import { store } from '../../Context';

const RouteForm = () => {
  const { dispatch } = useContext(store);
  const [routeInput, setRouteInput] = useState('');

  const handleChange = (evt) => {
    setRouteInput(evt.target.value);
  };

  const handleClick = () => {
    dispatch({ type: 'ADD_SINGLE_NODE', payload: routeInput });
  };
  return (
    <div>
      <div className="form-group">
        <label htmlFor="route-input">New Route</label>
        <input
          type="text"
          className="form-control"
          id="route-input"
          onChange={handleChange}
          value={routeInput}
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
