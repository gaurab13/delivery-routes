import React, { useState, useContext, useEffect } from 'react';
import { store } from '../../Context';
import './index.scss';

const CaseOne = () => {
  const { state, dispatch } = useContext(store);
  const routes = state.routes;

  const [routeInput, setRouteInput] = useState('');
  const [deliveryCost, setDeliveryCost] = useState(0);

  useEffect(() => {
    if (routeInput.length >= 3) {
      calculateCost();
    } else {
      dispatch({ type: 'UPDATE_CASE1_ROUTES', payload: [] });
    }
  }, [routeInput]);

  const calculateCost = () => {
    // Get nodes from delivery route input
    const nodes = routeInput.split('-');
    // Get adjacent routes from nodes
    const routesArray = [];
    for (var i = 0; i < nodes.length - 1; i++) {
      routesArray.push(`${nodes[i]}${nodes[i + 1]}`);
    }
    // Get valid corresponding routes with weights from routesArray
    const validRoutes = routes.filter((route) => routesArray.includes(route.substring(0, 2)));
    if (validRoutes.length === routesArray.length) {
      const totalCost = validRoutes.reduce((acc, cur) => {
        return acc + Number(cur.substring(2));
      }, 0);
      setDeliveryCost(totalCost);
      dispatch({ type: 'UPDATE_CASE1_ROUTES', payload: validRoutes });
    } else {
      setDeliveryCost(0);
    }
  };

  const getDeliveryCostOutput = () => {
    if (routeInput.length < 3) {
      return '-';
    }
    if (!deliveryCost) {
      return 'No Such Routes';
    }
    return deliveryCost;
  };

  return (
    <div className="case-one-container mt-4">
      <div className="d-flex flex-column">
        <div className="form-group mr-2">
          <label htmlFor="routeInput">Delivery Route</label>
          <input
            type="text"
            className="form-control"
            id="routeInput"
            onChange={(evt) => setRouteInput(evt.target.value)}
            value={routeInput}
          />
          <small id="route-input-help" className="form-text text-muted">
            It should be of appropriate format like A-B-C with towns separated by hyphen.
          </small>
        </div>
        <div className="d-flex flex-column">
          <div>Delivery Cost</div>
          <div className="delivery-cost-output">{getDeliveryCostOutput()}</div>
        </div>
      </div>
    </div>
  );
};

export default CaseOne;
