import t from './action-types';

const pressCreateUser = (email, password) =>
  ({
    type: t.PRESS_CREATE_USER,
    value: { email, password },
  });

const changeEmail = email =>
  ({
    type: t.CHANGE_EMAIL,
    value: email,
  });

const changePassword = password =>
  ({
    type: t.CHANGE_PASSWORD,
    value: password,
  });

export default
{
  pressCreateUser,
  changeEmail,
  changePassword,
};
