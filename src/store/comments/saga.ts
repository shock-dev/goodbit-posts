import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import CommentsApi from '../../api/comments';
import { addComment, setComments, setCreatingStatus, setError, setStatus } from './actions';
import { CommentsActionType } from './types';
import { EntityState } from '../types';

function* fetchComments(action: any): SagaIterator {
  try {
    const comments = yield call(CommentsApi.getById, action.payload);
    yield put(setComments(comments));
  } catch (e) {
    yield put(setError('Что-то пошло не так.'));
  } finally {
    yield put(setStatus(EntityState.LOADED));
  }
}

function* fetchCreatingComments(action: any): SagaIterator {
  try {
    const comment = yield call(CommentsApi.create, action.payload);
    yield put(addComment(comment));
  } catch (e) {
    yield put(setError('Что-то пошло не так.'));
  } finally {
    yield put(setCreatingStatus(EntityState.LOADED));
  }
}

function* CommentsSaga() {
  yield takeEvery(CommentsActionType.FETCH_COMMENTS, fetchComments);
  yield takeEvery(CommentsActionType.FETCH_CREATING_COMMENT, fetchCreatingComments);
}

export default CommentsSaga;
