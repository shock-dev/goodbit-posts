import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import CommentsApi from '../../api/comments';
import { addComment, deleteComment, setComments, setCreatingStatus, setError, setStatus, updateComment } from './actions';
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

function* fetchDeletingComments(action: any): SagaIterator {
  try {
    yield call(CommentsApi.delete, action.payload);
    yield put(deleteComment(action.payload));
  } catch (e) {
    yield put(setError('Что-то пошло не так.'));
  } finally {
    yield put(setCreatingStatus(EntityState.LOADED));
  }
}

function* fetchUpdatingComments(action: any): SagaIterator {
  try {
    const { id, body } = action.payload;
    yield call(CommentsApi.update, { id, body });
    yield put(updateComment(id, body));
  } catch (e) {
    yield put(setError('Что-то пошло не так.'));
  } finally {
    yield put(setCreatingStatus(EntityState.LOADED));
  }
}

function* CommentsSaga() {
  yield takeEvery(CommentsActionType.FETCH_COMMENTS, fetchComments);
  yield takeEvery(CommentsActionType.FETCH_CREATING_COMMENT, fetchCreatingComments);
  yield takeEvery(CommentsActionType.FETCH_DELETING_COMMENT, fetchDeletingComments);
  yield takeEvery(CommentsActionType.FETCH_UPDATING_COMMENT, fetchUpdatingComments);
}

export default CommentsSaga;
