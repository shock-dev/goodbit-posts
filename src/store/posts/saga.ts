import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import PostsApi from '../../api/posts';
import { addPost, setCreatingLoading, setError, setPosts, setStatus, updatePost } from './actions';
import { PostsActionType } from './types';
import { EntityState } from '../types';

function* fetchPosts(): SagaIterator {
  try {
    const posts = yield call(PostsApi.all);
    yield put(setPosts(posts.reverse()));
  } catch (e) {
    yield put(setError('Что-то пошло не так.'));
  } finally {
    yield put(setStatus(EntityState.LOADED));
  }
}

function* fetchCreatingPost(action: any): SagaIterator {
  try {
    const post = yield call(PostsApi.create, action.payload);
    yield put(addPost(post));
  } catch (e) {
    yield put(setError('Что-то пошло не так.'));
  } finally {
    yield put(setCreatingLoading(EntityState.LOADED));
  }
}

function* fetchUpdatingPost(action: any): SagaIterator {
  try {
    const { id, data } = action.payload;
    const post = yield call(PostsApi.update, id, data);
    yield put(updatePost(post));
  } catch (e) {
    yield put(setError('Что-то пошло не так.'));
  } finally {
    yield put(setCreatingLoading(EntityState.LOADED));
  }
}

function* PostsSaga() {
  yield takeEvery(PostsActionType.FETCH_POSTS, fetchPosts);
  yield takeEvery(PostsActionType.FETCH_CREATING_POST, fetchCreatingPost);
  yield takeEvery(PostsActionType.FETCH_UPDATING_POST, fetchUpdatingPost);
}

export default PostsSaga;
