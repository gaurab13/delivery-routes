import React from 'react';
import { StateProvider } from '../../Context';
import { render, screen, fireEvent } from '@testing-library/react';
import CaseTwo from './index';

test('Component elements', () => {
  render(
    <StateProvider>
      <CaseTwo />
    </StateProvider>,
  );
  expect(screen.getByRole('heading', { name: /Delivery Routes/i })).toBeInTheDocument();
  expect(
    screen.getByText(
      /Source and Destination are towns represented by single english uppercase alphabets./,
    ),
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/Source/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Destination/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Maximum Stops/)).toBeInTheDocument();
  expect(screen.getByText(/Number of Delivery Routes/)).toBeInTheDocument();
  expect(screen.getByRole('output').textContent).toBe('0');
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
      <CaseTwo />
    </StateProvider>,
  );
  const sourceInput = screen.getByLabelText('Source');
  const destInput = screen.getByLabelText('Destination');
  const maxStopsInput = screen.getByLabelText('Maximum Stops');

  fireEvent.change(sourceInput, { target: { value: 'A' } });
  expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_CASE2_ROUTES', payload: [] });
  expect(sourceInput.value).toBe('A');
  dispatch.mockReset();

  fireEvent.change(destInput, { target: { value: 'C' } });
  expect(destInput.value).toBe('C');
  expect(dispatch).toHaveBeenCalledWith({
    type: 'UPDATE_CASE2_ROUTES',
    payload: ['AB', 'BC', 'AC'],
  });
  dispatch.mockReset();
  expect(screen.getByRole('output').textContent).toBe('2');

  fireEvent.change(destInput, { target: { value: 'AC1' } });
  expect(destInput.value).toBe('AC1');
  expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_CASE2_ROUTES', payload: [] });
  expect(screen.getByRole('output').textContent).toBe('0');
  dispatch.mockReset();

  fireEvent.change(maxStopsInput, { target: { value: '2' } });
  dispatch.mockReset();
  fireEvent.change(destInput, { target: { value: 'C' } });
  expect(destInput.value).toBe('C');
  expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_CASE2_ROUTES', payload: ['AC'] });
  expect(screen.getByRole('output').textContent).toBe('1');
});
