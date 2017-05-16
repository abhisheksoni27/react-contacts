import {createStore} from 'redux';

import reducers from './redux/reducers/index.js';

const store = createStore(reducers);

export default store;