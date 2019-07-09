import { applyMiddleware, compose, createStore } from 'redux';
import middleware from './middleware';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);

// create and configure the store
const store = createStore(rootReducer, {}, enhancer);

export default store;
