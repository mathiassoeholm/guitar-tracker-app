import t from './action-types';

const changeLoginStatus = (value) =>
  ({
    type: t.CHANGE_LOGIN_STATUS,
    value,
  });

export default
{
  changeLoginStatus,
};
