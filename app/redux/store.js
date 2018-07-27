import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import makeRootSaga from './rootSaga';

const makeStore = backend =>
{
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [thunk, sagaMiddleware];

  const enhancer = compose(applyMiddleware(...middleware));
  const store = createStore(rootReducer, enhancer);

  const rootSaga = makeRootSaga(store.dispatch, backend);
  sagaMiddleware.run(rootSaga, store.dispatch);

  return store;
};

export default makeStore;
