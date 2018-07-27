import { all, takeLatest, put, call, select } from 'redux-saga/effects';

import uiActionTypes from '../ui/action-types';
import backendActions from './actions';

const createUser = backend => function* ()
{
  const { email, password } = yield select(state => state.ui);

  if (!email)
  {
    yield put(backendActions.setCreateUserEmailError('You must provide an email.'));
    return;
  }

  if (!password)
  {
    yield put(backendActions.setCreateUserPasswordError('You must provide a password.'));
    return;
  }

  yield put(backendActions.clearErrors());

  try
  {
    yield call(backend.createUser, email, password);
  }
  catch (error)
  {
    const { code, message } = error;

    if (code === 'auth/weak-password')
    {
      yield put(backendActions.setCreateUserPasswordError('The password is too weak.'));
    }
    else if (code === 'auth/email-already-in-use')
    {
      yield put(backendActions.setCreateUserEmailError('The email is is already in use.'));
    }
    else if (code === 'auth/invalid-email')
    {
      yield put(backendActions.setCreateUserEmailError('The email is invalid.'));
    }
    else
    {
      yield put(backendActions.setCreateUserGeneralError(message));
    }
  }
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
