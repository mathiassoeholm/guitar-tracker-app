import t from './actionTypes';

const login = (username, password) =>
{
	return (dispatch) =>
	{
		dispatch(
		{
			type: t.LOG_IN
		});
	}
};
