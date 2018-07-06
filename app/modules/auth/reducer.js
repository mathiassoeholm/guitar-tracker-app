import t from './action-types';

const initialState = { isLoggedIn: false };

const reducer = (state = initialState, action) =>
{
	switch (action.type)
	{
	case t.LOG_IN:
		return { ...state, isLoggedIn: true };

	case t.LOG_OUT:
		return { ...state, isLoggedIn: false };

	default:
		return state;
	}
};

export default reducer;
