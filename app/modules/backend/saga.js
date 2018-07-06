import { all, takeLatest, put, call } from 'redux-saga/effects';

import uiActionTypes from '../ui/action-types';
import backendActions from '../backend/actions';

const createUser = backend => function* (action)
{
  const { email, password } = action.value;

  yield call(backend.createUser, email, password);
};

function* makeSaga(backend)
{
  backend.initialize();

  backend.setAuthStateChangedListener(user =>
    put(backendActions.changeLoginStatus(!!user)));

  yield all([
    takeLatest(uiActionTypes.PRESS_CREATE_USER, createUser(backend)),
  ]);
}

export default makeSaga;
