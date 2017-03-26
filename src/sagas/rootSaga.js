import { takeEvery } from 'redux-saga/effects'
import { actions } from 'constans/actions';
import { getUsersFromApi } from './users/getUsersFromApi';

function* watchGetUsersFromApi() {
  yield takeEvery(actions.GET_USERS_FROM_API, getUsersFromApi);
}

export default function* rootSaga() {
  yield [
    watchGetUsersFromApi()
  ]
}