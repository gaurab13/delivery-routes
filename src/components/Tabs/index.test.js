import React from 'react';
import { StateProvider } from '../../Context';
import { render, screen, fireEvent } from '@testing-library/react';
import Tabs from './index';

test('Component elements', () => {
  render(
    <StateProvider>
      <Tabs />
    </StateProvider>,
  );
  expect(screen.getByRole('button', { name: /Routes/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Case 1/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Case 2/i })).toBeInTheDocument();
});

test('Component events', () => {
  const dispatch = jest.fn();
  render(
    <StateProvider testDispatch={dispatch}>
      <Tabs />
    </StateProvider>,
  );

  const RoutesBtn = screen.getByRole('button', { name: /Routes/i });
  const Case1Btn = screen.getByRole('button', { name: /Case 1/i });
  const Case2Btn = screen.getByRole('button', { name: /Case 2/i });

  dispatch.mockReset();
  fireEvent.click(RoutesBtn);
  expect(dispatch).toHaveBeenCalledWith({ type: 'SET_ACTIVE_TAB', payload: 'routes-tab' });

  dispatch.mockReset();
  fireEvent.click(Case1Btn);
  expect(dispatch).toHaveBeenCalledWith({ type: 'SET_ACTIVE_TAB', payload: 'case-one-tab' });

  dispatch.mockReset();
  fireEvent.click(Case2Btn);
  expect(dispatch).toHaveBeenCalledWith({ type: 'SET_ACTIVE_TAB', payload: 'case-two-tab' });
});
