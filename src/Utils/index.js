import uuid from 'react-uuid';
import { DEFAULT_POSITIONS } from '../Constants';

export const addRouteToNodesArray = (nodesArray, route) => {
  const source = route[0];
  const dest = route[1];
  [source, dest].forEach((town) => {
    if (nodesArray.findIndex((node) => node.title === town) < 0) {
      const nodeIndex = nodesArray.length;
      const lastNode = nodesArray[nodesArray.length - 1];
      const defaultPosition = DEFAULT_POSITIONS[nodeIndex];
      if (defaultPosition) {
        nodesArray.push({
          id: uuid(),
          title: town,
          x: defaultPosition.x,
          y: defaultPosition.y,
          type: 'empty',
        });
      } else {
        nodesArray.push({
          id: uuid(),
          title: town,
          x: nodeIndex % 2 === 1 ? lastNode.x + 100 : lastNode.x,
          y: nodeIndex % 2 === 0 ? lastNode.y + 100 : lastNode.y,
          type: 'empty',
        });
      }
    }
  });
};

export const getAllRoutes = (routes, nodes, source, dest) => {
  const adjacencyList = new Map();

  nodes.forEach((node) => adjacencyList.set(node.title, []));
  routes.forEach((route) => {
    const weight = Number(route.substring(2));
    adjacencyList.get(route[0]).push({ dest: route[1], weight });
  });

  var allRoutes = [];
  var visited = new Set();
  var path = [];
  path.push(source);

  function findAllPaths(v1, v2, visited, path, first = false, count) {
    if (!first && v1 === v2) {
      console.log(`${path} with Count: ${count}`);
      const pathString = path.join();
      allRoutes.push(pathString);
      return;
    }
    visited.add(v1);
    var destinations = adjacencyList.get(v1);
    for (var destObj of destinations) {
      const { dest, weight } = destObj;
      if (!visited.has(dest) || dest === v2) {
        path.push(dest);
        count = count + weight;
        findAllPaths(dest, v2, visited, path, false, count);
        path.pop();
        count = count - weight;
      }
    }
    visited.delete(v1);
  }

  findAllPaths(source, dest, visited, path, true, 0);
  const allRoutesArray = allRoutes.map((route) => route.split(','));
  return allRoutesArray;
};
