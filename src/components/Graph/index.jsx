import React, { useContext } from 'react';
import { GraphView } from 'react-digraph';
import { store } from '../../Context';

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
  const { state } = useContext(store);
  const { nodes, edges } = state;

  const NodeTypes = GraphConfig.NodeTypes;
  const EdgeTypes = GraphConfig.EdgeTypes;

  const handleNodeSelect = (node) => {
    if (node) {
      console.log(node);
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
