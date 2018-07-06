import t from './action-types';

const pressCreateUser = (email, password) =>
  ({
    type: t.PRESS_CREATE_USER,
    value: { email, password },
  });

export default
{
  pressCreateUser,
};
