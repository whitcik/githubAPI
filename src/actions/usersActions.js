import { actions } from 'constans/actions';

export const setUsersToStore = (users) => {
  return {
      type: actions.SET_USERS_TO_STORE,
      users
  };
}

export const getUsers = () => {
  return {
      type: actions.GET_USERS_FROM_API,
  };
}