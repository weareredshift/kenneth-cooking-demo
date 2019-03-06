import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';

export const history = createBrowserHistory();

const middleware = [
  routerMiddleware(history),
  thunk
];

/* eslint-disable-next-line */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);

const configureStore = (initialState) => {
  const store = createStore(
    createRootReducer(history),
    initialState,
    enhancer
  );

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    /* eslint-disable implicit-arrow-linebreak, global-require */
    module.hot.accept(
      './reducers',
      () => store.replaceReducer(require('./reducers'))
    );
  }

  return store;
};

export default configureStore({});
