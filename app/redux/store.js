import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './rootReducer';

let middleware = [thunk]
const enhancer = compose(applyMiddleware(...middleware));

// Connect our store to the reducers
export default createStore(reducers, enhancer);
