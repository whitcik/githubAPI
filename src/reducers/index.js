import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import usersReducer from './users/usersReducer';
import selectedReducer from './users/selectedReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    routing: routerReducer,
    selected: selectedReducer
});
export default rootReducer;