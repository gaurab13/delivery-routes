import React, { createContext, useReducer } from 'react';
import { addRouteToNodesArray } from '../Utils';
import { DEFAULT_ROUTES } from '../Constants';

const initialState = {
  routes: DEFAULT_ROUTES,
  nodes: [],
  edges: [],
  caseOneRoutes: [],
  caseTwoRoutes: [],
  activeTab: 'case-one-tab',
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children, testDispatch, testState }) => {
  const [iState, iDispatch] = useReducer((state, action) => {
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
      case 'UPDATE_CASE1_ROUTES':
        return {
          ...state,
          caseOneRoutes: payload,
        };
      case 'UPDATE_CASE2_ROUTES':
        return {
          ...state,
          caseTwoRoutes: payload,
        };
      case 'SET_ACTIVE_TAB':
        return {
          ...state,
          activeTab: payload,
        };
      default:
        return initialState;
    }
  }, initialState);
  const dispatch = testDispatch ? testDispatch : iDispatch;
  const state = testState ? testState : iState;
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
