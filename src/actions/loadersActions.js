import { actions } from 'constans/actions';

export const setUserLoader = (state) => {
  return {
      type: actions.SET_USERS_LOADER,
      state
  };
}