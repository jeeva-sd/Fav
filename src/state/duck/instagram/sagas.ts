import { call, put, takeLatest } from 'redux-saga/effects';
import { contactError, messageSent, setPost, subscribtionDone, subscribtionError } from './reducer';
import { api } from '~/services';
import { initialAPIResult } from '~/constants';

export function* fetchPostSaga(action: ReturnType<any>): Generator {
  try {
    const post: any = yield call(api.instagram.getPost, action.payload);
    yield put(setPost(post));
  } catch (error) {
    console.error(error);
  }
}

export function* subscribe(action: ReturnType<any>): Generator {
  let result: any = initialAPIResult;

  try {
    result = yield call(api.instagram.subscribeEmail, action.payload);
    if (result.code === 103) put(subscribtionError(result));

    yield put(subscribtionDone(result));
  } catch (error) {
    yield put(subscribtionError(result));
    console.error(error);
  }
}

export function* contact(action: ReturnType<any>): Generator {
  let result: any = initialAPIResult;
  if (result.code === 103) put(contactError(result));

  try {
    result = yield call(api.instagram.contact, action.payload);
    yield put(messageSent(result));
  } catch (error) {
    yield put(contactError(result));
    console.error(error);
  }
}

export function* watchFetchPosts() {
  yield takeLatest('instagram/fetchPost', fetchPostSaga);
  yield takeLatest('instagram/subscribeRequest', subscribe);
  yield takeLatest('instagram/contactRequest', contact);
}