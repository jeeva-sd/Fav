import { call, put, takeLatest } from 'redux-saga/effects';
import { setPost } from './reducer';
import { api } from '~/services';

export function* fetchPostSaga(action: ReturnType<any>): Generator {
  try {
    const post: any = yield call(api.instagram.getPost, action.payload);
    yield put(setPost(post));
  } catch (error) {
    console.error(error);
  }
}

export function* watchFetchPosts() {
  yield takeLatest('instagram/fetchPost', fetchPostSaga);
}