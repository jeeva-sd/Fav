import { all } from 'redux-saga/effects';
import { watchFetchPosts } from '../duck/instagram/sagas';

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
  ]);
}
