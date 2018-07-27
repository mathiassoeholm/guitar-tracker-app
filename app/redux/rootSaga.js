import { all } from 'redux-saga/effects';

import makeBackendSaga from '../modules/backend/saga';

const makeRootSaga = (dispatch, backend) => function* ()
{
  yield all([
    makeBackendSaga(dispatch, backend),
  ]);
};

export default makeRootSaga;
