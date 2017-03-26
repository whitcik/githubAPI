import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import usersReducer from './home/usersReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    routing: routerReducer
});
export default rootReducer;