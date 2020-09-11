import React, { Component } from 'react';
import { GraphView } from 'react-digraph';

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
const NODE_KEY = 'id'; // Allows D3 to correctly update DOM

export default class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: sample,
      selected: {},
    };
  }
  /* Define custom graph editing methods here */

  render() {
    const nodes = sample.nodes;
    const edges = sample.edges;
    const selected = this.state.selected;

    const NodeTypes = GraphConfig.NodeTypes;
    const NodeSubtypes = GraphConfig.NodeSubtypes;
    const EdgeTypes = GraphConfig.EdgeTypes;

    return (
      <GraphView
        nodeKey={NODE_KEY}
        nodes={nodes}
        edges={edges}
        selected={selected}
        nodeTypes={NodeTypes}
        nodeSubtypes={NodeSubtypes}
        edgeTypes={EdgeTypes}
        onSelectNode={this.onSelectNode}
        onUpdateNode={this.onUpdateNode}
        onSelectEdge={this.onSelectEdge}
        onCreateNode={this.onCreateNode}
        onDeleteNode={this.onDeleteNode}
        onSwapEdge={this.onSwapEdge}
      />
    );
  }
}

const sample = {
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
