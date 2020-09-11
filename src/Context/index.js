import React, { createContext, useReducer } from 'react';

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
      default:
        return initialState;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
