import React, { useState, useContext } from 'react';
import { store } from '../../Context';
import { getAllRoutes } from '../../Utils';

const CaseTwo = () => {
  const { state, dispatch } = useContext(store);
  const {routes, nodes} = state;

  const [sourceInput, setSourceInput] = useState("");
  const [destInput, setDestInput] = useState("");
  const [maxStops, setMaxStops] = useState(5);

  const getValidRoutes = (routes) => {
    console.log(maxStops);
    if (!maxStops || maxStops === "0") {
      return routes;
    }
    return routes.filter( route => route.length <= maxStops );
  }

  const findAllRoutes = () => {
    const allRoutes = getAllRoutes(routes, nodes, sourceInput, destInput);
    console.log("All", allRoutes);
    const validRoutes = getValidRoutes(allRoutes);
    console.log("Valid", validRoutes);
    const formattedSet = new Set();
    validRoutes.map(route => {
      for(var i=0; i < route.length -1; i++) {
        formattedSet.add(`${route[i]}${route[i+1]}`);
      }
    });
    console.log(formattedSet);
    dispatch({type: 'UPDATE_CASE2_ROUTES', payload: Array.from(formattedSet)});
  }

  return (
    <div className="case-two-container">
      <div className="d-flex">
        <div className="form-group mr-4">
          <label htmlFor="sourceInput">Source</label>
          <input
            type="text"
            className="form-control"
            id="sourceInput"
            onChange={(evt) => setSourceInput(evt.target.value)}
            value={sourceInput}
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
      <div className="form-group">
        <button className="btn btn-primary" onClick={findAllRoutes}>
          Find
        </button>
      </div>
    </div>
  )
}

export default CaseTwo;
