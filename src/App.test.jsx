import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { Provider, ReactReduxContext } from 'react-redux';
import store from './config/store';
import 'jest-canvas-mock';

test('renders canvas tag', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App context={ReactReduxContext} />
    </Provider>
  );
  const mainCanvas = getByTestId('main-canvas');
  expect(mainCanvas).toBeInTheDocument();
});
