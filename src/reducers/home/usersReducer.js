import { actions } from 'constans/actions';

export default(users = [], payload) => {
  switch (payload.type) {
    case actions.SET_USERS_TO_STORE:
      console.log(actions.SET_USERS_TO_STORE, payload);
      return payload.users;
    default:
      return users;
  }
};