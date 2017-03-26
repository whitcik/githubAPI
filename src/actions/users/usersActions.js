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

export const selectUser = (id) => {
  return {
      type: actions.SELECT_USER,
      id
  };
}