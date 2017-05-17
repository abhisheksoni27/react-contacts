import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './redux/reducers/index.js';

const store = createStore(reducers, applyMiddleware(logger));
export default store;