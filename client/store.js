import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducer = (state = {}, action) => {
  return state;
};

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger())
);
