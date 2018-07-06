import { all } from 'redux-saga/effects';

import makeBackendSaga from '../modules/backend/saga';

const makeRootSaga = backend => function* ()
{
  yield all([
    makeBackendSaga(backend),
  ]);
};

export default makeRootSaga;
