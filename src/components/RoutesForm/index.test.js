import React from 'react';
import { StateProvider } from '../../Context';
import { render, screen, fireEvent } from '@testing-library/react';
import RoutesForm from './index';

test('Component elements', () => {
  render(
    <StateProvider testState={{routes: ['AB1', 'AC4', 'AD10', 'BE3']}} >
      <RoutesForm />
    </StateProvider>
  );
  expect(screen.getByText(/Current Routes/i)).toBeInTheDocument();
  expect(screen.getByText(/AB1, AC4, AD10, BE3/)).toBeInTheDocument();
  expect(screen.getByText(/New Route/)).toBeInTheDocument();
  expect(screen.getByText(/It should be of appropriate format like AB1/)).toBeInTheDocument();
  expect(screen.getByRole('button', {name: /Add/i})).toBeInTheDocument();
});

test('Component onChange and submit event on valid input', () => {
  const dispatch = jest.fn();
  render(
    <StateProvider testDispatch={dispatch}>
      <RoutesForm />
    </StateProvider>
  );
  const inputBox = screen.getByLabelText('New Route');
  fireEvent.change(inputBox, { target: { value: 'FG1' } });
  expect(inputBox.value).toBe('FG1');
  const addBtn = screen.getByRole('button', {name: /Add/i});
  fireEvent.click(addBtn);
  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch).toHaveBeenCalledWith({ type: 'ADD_SINGLE_NODE', payload: 'FG1' });
});

test('Component onChange and submit event on invalid input', () => {
  const dispatch = jest.fn();
  render(
    <StateProvider testDispatch={dispatch}>
      <RoutesForm />
    </StateProvider>
  );
  const inputBox = screen.getByLabelText('New Route');
  const addBtn = screen.getByRole('button', {name: /Add/i});

  fireEvent.change(inputBox, { target: { value: 'AB1' } });
  fireEvent.click(addBtn);
  expect(inputBox.className).toBe('form-control error');
  expect(dispatch).toHaveBeenCalledTimes(0);

  fireEvent.change(inputBox, { target: { value: 'AB1AB' } });
  fireEvent.click(addBtn);
  expect(inputBox.className).toBe('form-control error');
  expect(dispatch).toHaveBeenCalledTimes(0);
});
