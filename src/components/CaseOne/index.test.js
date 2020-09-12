import React from 'react';
import { StateProvider } from '../../Context';
import { render, screen, fireEvent } from '@testing-library/react';
import CaseOne from './index';

test('Component elements', () => {
  render(
    <StateProvider>
      <CaseOne />
    </StateProvider>,
  );
  expect(screen.getByRole('heading', { name: /Delivery Cost/i })).toBeInTheDocument();
  expect(
    screen.getByText(
      /Delivery cost for a route is the sum of cost of all individual paths within that route./,
    ),
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/Enter Delivery Route/)).toBeInTheDocument();
  expect(screen.getByRole('output').textContent).toBe('-');
});

test('Component Events', () => {
  const state = {
    routes: ['AB1', 'BC2', 'AC4'],
    nodes: [
      {
        id: 'node1',
        title: 'A',
      },
      {
        id: 'node2',
        title: 'B',
      },
      {
        id: 'node3',
        title: 'C',
      },
    ],
  };
  const dispatch = jest.fn();
  render(
    <StateProvider testState={state} testDispatch={dispatch}>
      <CaseOne />
    </StateProvider>,
  );

  const routeInput = screen.getByLabelText(/Enter Delivery Route/);

  fireEvent.change(routeInput, { target: { value: 'A-' } });
  expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_CASE1_ROUTES', payload: [] });
  expect(screen.getByRole('output').textContent).toBe('-');
  dispatch.mockReset();

  fireEvent.change(routeInput, { target: { value: 'A-B-C' } });
  expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_CASE1_ROUTES', payload: ['AB1', 'BC2'] });
  expect(screen.getByRole('output').textContent).toBe('3');
  dispatch.mockReset();

  fireEvent.change(routeInput, { target: { value: 'B-A' } });
  // expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_CASE1_ROUTES', payload: ['AB1'] });
  expect(screen.getByRole('output').textContent).toBe('No Such Routes');
  dispatch.mockReset();
});
