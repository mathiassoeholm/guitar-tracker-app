import { all, takeLatest, call } from 'redux-saga/effects';

import uiActionTypes from '../ui/action-types';

const makeCreateUser = backend => function* () {
  // Get email and password

  yield call(backend.createUser);
};

function* makeSaga(backend) {
  yield all([
    takeLatest(uiActionTypes.PRESS_CREATE_USER, makeCreateUser(backend)),
  ]);
}

export default makeSaga;
