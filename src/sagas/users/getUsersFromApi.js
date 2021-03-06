import { put, call, select } from 'redux-saga/effects';
import { actions } from 'constans/actions';
import { getSelectedUserName } from 'selectors/selectors';
import axios from 'axios';

export function* getUsersFromApi() {
  try{
    yield put({ type: actions.SET_USERS_LOADER, state: true });
    const selectedUserName = yield select(getSelectedUserName);
    const selectedUserId = selectedUserName.length ? yield call(getSelectedUserId, selectedUserName) : 1;

    const users = yield call(getUsersAJAX, selectedUserId);
    yield put({ type: actions.SET_USERS_LOADER, state: false });
    yield put({ type: actions.SET_USERS_TO_STORE, users: users });
  } catch(e){
    console.log(e.response);
    const users = yield call(getUsersAJAX);
    yield put({ type: actions.SET_USERS_LOADER, state: false });
    yield put({ type: actions.SET_USERS_TO_STORE, users: users });
  }
}

function getUsersAJAX(firstUserId = 0){
  return axios.get('https://api.github.com/users?since=' + (firstUserId - 1))
                .then((data) => data.data);
};

function getSelectedUserId(userName){
  return axios.get('https://api.github.com/users' + userName)
                .then((data) => data.data.id);
};

