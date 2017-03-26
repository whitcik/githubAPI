import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import usersReducer from './home/usersReducer';
import selectedReducer from './home/selectedReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    routing: routerReducer,
    selected: selectedReducer
});
export default rootReducer;