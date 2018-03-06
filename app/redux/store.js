import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './rootReducer';

// This middleware might be overkill, need to investigate further.
const enhancer = compose(applyMiddleware(thunk));

// Connect our store to the reducers
export default createStore(reducers, enhancer);