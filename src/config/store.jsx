import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import createRootReducers from './reducers';
import { LOCAL_MODE_LOGGER } from './constants';

export const getLogger = (
  loggerMode = localStorage.getItem(LOCAL_MODE_LOGGER)
) => {
  const logger = createLogger({
    collapsed: true,
  });
  return loggerMode === 'true' ? applyMiddleware(logger) : undefined;
};

export default createStore(createRootReducers(), getLogger());
