import { actions } from 'constans/actions';

const initialState = {
  userId: null
};

export default(selected = initialState, payload) => {
  switch (payload.type) {
    case actions.SELECT_USER:
      return {
        ...selected,
        userId: payload.id
      };
    default:
      return selected;
  }
};