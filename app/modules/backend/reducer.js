import t from './action-types';

const initialState = {
  createUserEmailError: undefined,
  createUserPasswordError: undefined,
  createUserGeneralError: undefined,
};

const reducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case t.SET_CREATE_USER_EMAIL_ERROR:
      return { ...state, createUserEmailError: action.value };

    case t.SET_CREATE_USER_PASSWORD_ERROR:
      return { ...state, createUserPasswordError: action.value };

    case t.SET_CREATE_USER_GENERAL_ERROR:
      return { ...state, createUserGeneralError: action.value };

    case t.CLEAR_ERRORS:
      return {
        ...state,
        createUserEmailError: undefined,
        createUserPasswordError: undefined,
        createUserGeneralError: undefined,
      };

    default:
      return state;
  }
};

export default reducer;
