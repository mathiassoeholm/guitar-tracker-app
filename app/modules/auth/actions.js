import t from './action-types';

const authActionsMaker = (backend) => ({

  createUser: (email, password) => async dispatch => {
    try
    {
      const user = await backend.createUser(email, password);
    }
    catch (error)
    {
      // TODO: Show error
    }

    dispatch({
      type: t.LOG_IN,
    });
  },
});

export default authActionsMaker;
