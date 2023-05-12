import React from 'react';
import Board from './Board';
import store from '../../config/store';

import 'jest-canvas-mock';

import { render } from '@testing-library/react';
import { Provider, ReactReduxContext } from 'react-redux';

test('renders canvas tag', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Board context={ReactReduxContext} />
    </Provider>
  );
  const mainCanvas = getByTestId('main-canvas');
  expect(mainCanvas).toBeInTheDocument();
});
