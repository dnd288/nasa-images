import reduce from 'lodash/reduce';
import thunk from 'redux-thunk';
/* import { logger } from 'redux-logger'; */
import { compose, createStore, applyMiddleware } from 'redux';
import combineReducers from './combineReducers';
import combineStates from './combineStates';
import initialState from './initialState';

const middlewares = [thunk];

/*
if (process.env.NODE_ENV === 'development') {
	middlewares.push(reduxLogger);
}
*/

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

const configureStore = (modules) => createStore(
	combineReducers(modules),
	combineStates(initialState, modules),
	composeEnhancers(
		applyMiddleware(...middlewares),
	),
);

export default configureStore;
