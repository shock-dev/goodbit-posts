import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import PostsApi from '../../api/posts';
import { setPost, setError, setLoading } from './actions';
import { PostActionType } from './types';

function* fetchPost(action: any): SagaIterator {
  try {
    const post = yield call(PostsApi.one, action.payload);
    yield put(setPost(post));
  } catch (e) {
    yield put(setError('Что-то пошло не так.'));
  } finally {
    yield put(setLoading(false));
  }
}

function* PostSaga() {
  yield takeEvery(PostActionType.FETCH_POST, fetchPost);
}

export default PostSaga;
