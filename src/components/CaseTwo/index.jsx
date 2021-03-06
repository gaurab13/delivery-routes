import React, { useState, useContext, useEffect } from 'react';
import { store } from '../../Context';
import { getAllRoutes } from '../../Utils';
import './index.scss';
import { DEFAULT_MAX_STOPS } from '../../Constants';

const CaseTwo = () => {
  const { state, dispatch } = useContext(store);
  const { routes, nodes } = state;

  const [sourceInput, setSourceInput] = useState('');
  const [destInput, setDestInput] = useState('');
  const [maxStops, setMaxStops] = useState(DEFAULT_MAX_STOPS);
  const [routesCount, setRoutesCount] = useState(0);

  const getValidRoutes = (routes) => {
    if (!maxStops || maxStops === '0') {
      return routes;
    }
    return routes.filter((route) => route.length <= Number(maxStops));
  };

  const findAllRoutes = () => {
    const allRoutes = getAllRoutes(routes, nodes, sourceInput, destInput);
    const validRoutes = getValidRoutes(allRoutes);
    const formattedSet = new Set();
    if (validRoutes.length) {
      validRoutes.map((route) => {
        for (var i = 0; i < route.length - 1; i++) {
          formattedSet.add(`${route[i]}${route[i + 1]}`);
        }
      });
      dispatch({ type: 'UPDATE_CASE2_ROUTES', payload: Array.from(formattedSet) });
    } else {
      dispatch({ type: 'UPDATE_CASE2_ROUTES', payload: [] });
    }
    setRoutesCount(validRoutes.length);
  };

  useEffect(() => {
    if (sourceInput.length === 1 && destInput.length === 1) {
      findAllRoutes();
    } else {
      dispatch({ type: 'UPDATE_CASE2_ROUTES', payload: [] });
      setRoutesCount(0);
    }
  }, [sourceInput, destInput, maxStops]);

  return (
    <div className="case-two-container mt-4">
      <div className="case-info">
        <h5>Delivery Routes</h5>
        <p>Source and Destination are towns represented by single english uppercase alphabets.</p>
      </div>
      <div className="d-flex">
        <div className="form-group mr-2">
          <label htmlFor="sourceInput">Source</label>
          <input
            type="text"
            className="form-control"
            id="sourceInput"
            onChange={(evt) => setSourceInput(evt.target.value)}
            value={sourceInput}
            autoComplete={'off'}
          />
        </div>
        <div className="form-group">
          <label htmlFor="destInput">Destination</label>
          <input
            type="text"
            className="form-control"
            id="destInput"
            onChange={(evt) => setDestInput(evt.target.value)}
            value={destInput}
            autoComplete={'off'}
          />
        </div>
      </div>
      <div className="form-group w-50">
        <label htmlFor="maxStopsInput">Maximum Stops</label>
        <input
          type="number"
          className="form-control"
          id="maxStopsInput"
          onChange={(evt) => setMaxStops(evt.target.value)}
          value={maxStops}
        />
      </div>
      <div className="d-flex flex-column">
        <div>Number of Delivery Routes</div>
        <div className="d-flex justify-content-between" role="output">
          <div className="routes-count-output">{routesCount}</div>
        </div>
      </div>
    </div>
  );
};

export default CaseTwo;
