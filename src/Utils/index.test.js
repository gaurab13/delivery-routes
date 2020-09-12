import { addRouteToNodesArray, getAllRoutes } from './index';

describe('addRouteToNodesArray', () => {
  it('should add route to a nodes array ', () => {
    const nodesArray = [];
    const route = 'AB1';
    addRouteToNodesArray(nodesArray, route);
    expect(nodesArray.length).toEqual(2);
    expect(nodesArray[0].title).toEqual('A');
    expect(nodesArray[1].title).toEqual('B');
  });
});

describe('getAllRoutes', () => {
  const routes = ['AB1', 'AC4', 'BE3', 'AD10', 'CD4', 'DE2'];
  const nodes = [
    {
      id: '861377e-7b8f-ec45-2f0a-afe85fe7e532',
      title: 'A',
      x: 0,
      y: 0,
      type: 'empty',
    },
    {
      id: 'e3f2563-67a4-d451-6426-0f3558014f',
      title: 'B',
      x: -150,
      y: 75,
      type: 'empty',
    },
    {
      id: 'a0f68b8-8c20-aff-361-645186f80fe',
      title: 'C',
      x: 150,
      y: 75,
      type: 'empty',
    },
    {
      id: '655ad-43bc-8c1-7775-fe43385cc12b',
      title: 'D',
      x: -200,
      y: 200,
      type: 'empty',
    },
    {
      id: '655ad-43bc-8c1-7775-fe43385cc1er',
      title: 'E',
      x: 200,
      y: 200,
      type: 'empty',
    },
  ];
  it('should return all routes between two endpoints if route exists', () => {
    const allRoutesArray = getAllRoutes(routes, nodes, 'A', 'E');
    expect(allRoutesArray).toEqual([
      ['A', 'B', 'E'],
      ['A', 'C', 'D', 'E'],
      ['A', 'D', 'E'],
    ]);
  });
  it("should return empty array if route doesn't exist", () => {
    const allRoutesArray = getAllRoutes(routes, nodes, 'A', 'F');
    expect(allRoutesArray).toEqual([]);
  });
});
