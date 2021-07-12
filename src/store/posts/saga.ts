import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import PostsApi from '../../api/posts';
import { setPosts, setError, setLoading } from './actions';
import { PostsActionType } from './types';

function* fetchPosts(): SagaIterator {
  try {
    const posts = yield call(PostsApi.all);
    yield put(setPosts(posts));
  } catch (e) {
    yield put(setError('Что-то пошло не так.'));
  } finally {
    yield put(setLoading(false));
  }
}

function* PostsSaga() {
  yield takeEvery(PostsActionType.FETCH_POSTS, fetchPosts);
}

export default PostsSaga;
