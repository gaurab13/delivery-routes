import React, { createContext, useReducer } from 'react';

const initialState = {
  routes: ['AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1'],
  nodes: [
    {
      id: 1,
      title: 'A',
      x: 0,
      y: 100,
      type: 'empty',
    },
    {
      id: 2,
      title: 'B',
      x: 200,
      y: 100,
      type: 'empty',
    },
    {
      id: 3,
      title: 'C',
      x: 200,
      y: 100,
      type: 'empty',
    },
    {
      id: 4,
      title: 'D',
      x: 300,
      y: 200,
      type: 'empty',
    },
    {
      id: 5,
      title: 'E',
      x: 300,
      y: 300,
      type: 'empty',
    },
    {
      id: 6,
      title: 'F',
      x: 400,
      y: 300,
      type: 'empty',
    },
    {
      id: 7,
      title: 'G',
      x: 400,
      y: 400,
      type: 'empty',
    },
    {
      id: 8,
      title: 'H',
      x: 500,
      y: 400,
      type: 'empty',
    },
    {
      id: 9,
      title: 'I',
      x: 500,
      y: 500,
      type: 'empty',
    },
  ],
  edges: [
    {
      source: 1,
      target: 2,
      type: 'edgeWithWeight',
      handleText: 5,
    },
  ],
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const { type, payload } = action;
    switch (type) {
      default:
        return initialState;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
