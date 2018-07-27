import t from './action-types';

const changeLoginStatus = (value) =>
  ({
    type: t.CHANGE_LOGIN_STATUS,
    value,
  });

const setCreateUserEmailError = (value) =>
  ({
    type: t.SET_CREATE_USER_EMAIL_ERROR,
    value,
  });

const setCreateUserPasswordError = (value) =>
  ({
    type: t.SET_CREATE_USER_PASSWORD_ERROR,
    value,
  });

const setCreateUserGeneralError = (value) =>
  ({
    type: t.SET_CREATE_USER_GENERAL_ERROR,
    value,
  });

const clearErrors = () =>
  ({
    type: t.CLEAR_ERRORS,
  });

export default
{
  changeLoginStatus,
  setCreateUserEmailError,
  setCreateUserPasswordError,
  setCreateUserGeneralError,
  clearErrors,
};
