import { put, call } from 'redux-saga/effects';
import { actions } from 'constans/actions';
import axios from 'axios';

export function* getUsersFromApi(item) {
  try{
    const users = yield call(getUsersAJAX);
    yield put({ type: actions.SET_USERS_TO_STORE, users: users.data });
  } catch(e){
    console.log(e);
  }
}

function getUsersAJAX(){
  return axios.get('https://api.github.com/users');
};