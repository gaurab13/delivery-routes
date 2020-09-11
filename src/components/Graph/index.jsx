import React, { useContext, useEffect } from 'react';
import { GraphView } from 'react-digraph';
import { store } from '../../Context';

import { addRouteToNodesArray } from '../../Utils';

const GraphConfig = {
  NodeTypes: {
    empty: {
      // required to show empty nodes
      typeText: 'Town',
      shapeId: '#empty', // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 100 100" id="empty" key="0">
          <circle cx="50" cy="50" r="16"></circle>
        </symbol>
      ),
    },
    custom: {
      // required to show empty nodes
      typeText: 'Custom',
      shapeId: '#custom', // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 50 25" id="custom" key="0">
          <ellipse cx="50" cy="25" rx="50" ry="25"></ellipse>
        </symbol>
      ),
    },
  },
  NodeSubtypes: {},
  EdgeTypes: {
    emptyEdge: {
      // required to show empty edges
      shapeId: '#emptyEdge',
      shape: (
        <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
          <circle cx="25" cy="25" r="10" fill="currentColor">
            {' '}
          </circle>
        </symbol>
      ),
    },
  },
};

const Graph = () => {
  const { state, dispatch } = useContext(store);
  const { nodes, edges, routes, caseOneRoutes, activeTab } = state;
  console.log(state);

  const NodeTypes = GraphConfig.NodeTypes;
  const EdgeTypes = GraphConfig.EdgeTypes;

  const getNodesFromRoute = () => {
    var nodesArray = [];
    routes.forEach((route) => {
      addRouteToNodesArray(nodesArray, route);
    });
    return nodesArray;
  };

  const getIdFromTitle = (title) => {
    return nodes.find((node) => node.title === title).id;
  };

  const getActiveRoute = () => {
    if (activeTab === 'routes-tab') {
      return routes;
    }
    if (activeTab === 'case-one-tab') {
      return caseOneRoutes;
    }
  };

  const getEdgesFromRoute = () => {
    const activeRoute = getActiveRoute();
    return activeRoute.map((route) => {
      const weight = Number(route.substring(2));
      return {
        source: getIdFromTitle(route[0]),
        target: getIdFromTitle(route[1]),
        type: 'edgeWithWeight',
        handleText: weight,
      };
    });
  };

  useEffect(() => {
    dispatch({ type: 'UPDATE_NODES', payload: getNodesFromRoute() });
  }, []);

  useEffect(() => {
    if (nodes.length) {
      dispatch({ type: 'UPDATE_EDGES', payload: getEdgesFromRoute() });
    }
  }, [nodes.length, routes.length, caseOneRoutes, activeTab]);

  const handleNodeSelect = (node) => {
    if (node) {
      dispatch({ type: 'UPDATE_SINGLE_NODE', payload: node });
    }
  };

  return (
    <GraphView
      nodeKey={'id'}
      nodes={nodes}
      edges={edges}
      nodeTypes={NodeTypes}
      nodeSubtypes={{}}
      edgeTypes={EdgeTypes}
      onSelectNode={handleNodeSelect}
    />
  );
};
export default Graph;
