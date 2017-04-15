import { actions } from 'constans/actions';

const initialState = {
  isUsersLoader: false
};

export default(loaders = initialState, payload) => {
  switch (payload.type) {
    case actions.SET_USERS_LOADER:
      return {
        ...loaders,
        isUsersLoader: payload.state
      };
    default:
      return loaders;
  }
};