import uuid from 'react-uuid';

export const addRouteToNodesArray = (nodesArray, route) => {
  const source = route[0];
  const dest = route[1];
  [source, dest].forEach((town) => {
    if (nodesArray.findIndex((node) => node.title === town) < 0) {
      const nodeIndex = nodesArray.length;
      const lastNode = nodesArray[nodesArray.length - 1];
      nodesArray.push({
        id: uuid(),
        title: town,
        x: lastNode ? (nodeIndex % 2 === 1 ? lastNode.x + 100 : lastNode.x) : 0,
        y: lastNode ? (nodeIndex % 2 === 0 ? lastNode.y + 100 : lastNode.y) : 0,
        type: 'empty',
      });
    }
  });
};
