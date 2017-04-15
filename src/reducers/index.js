import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import usersReducer from './users/usersReducer';
import loaderReducer from './users/loaderReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    routing: routerReducer,
    loaders: loaderReducer
});
export default rootReducer;