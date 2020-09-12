import React from 'react';
import { StateProvider } from '../../Context';
import { render, screen } from '@testing-library/react';
import GraphInfo from './index';

test('Component elements', () => {
  render(
    <StateProvider>
      <GraphInfo />
    </StateProvider>,
  );
  expect(screen.getByText('Directed Graph')).toBeInTheDocument();
  expect(
    screen.getByText(
      'In this directed graph each node represents a town and an edge with weight represents the delivery cost for routing between two towns.',
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      'Note: You can grab a node and adjust its position by moving it around in the graph.',
    ),
  ).toBeInTheDocument();
});
