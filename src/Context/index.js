import React, { createContext, useReducer } from 'react';
import { addRouteToNodesArray } from '../Utils';

const initialState = {
  routes: ['AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'],
  nodes: [],
  edges: [],
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'UPDATE_NODES':
        return {
          ...state,
          nodes: payload,
        };
      case 'UPDATE_EDGES':
        return {
          ...state,
          edges: payload,
        };
      case 'UPDATE_SINGLE_NODE':
        const updatedArray = state.nodes.map((node) => {
          if (node.id === payload.id) return payload;
          return node;
        });
        return {
          ...state,
          nodes: updatedArray,
        };
      case 'ADD_SINGLE_NODE':
        const newNodesArray = [...state.nodes];
        addRouteToNodesArray(newNodesArray, payload);
        return {
          ...state,
          nodes: newNodesArray,
          routes: [...state.routes, payload],
        };
      default:
        return initialState;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
