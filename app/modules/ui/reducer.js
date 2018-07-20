import t from './action-types';

const initialState = {
  email: undefined,
  password: undefined,
};

const reducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case t.CHANGE_EMAIL:
      return { ...state, email: action.value };

    case t.CHANGE_PASSWORD:
      return { ...state, password: action.value };

    default:
      return state;
  }
};

export default reducer;
