import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import CommentsApi from '../../api/comments';
import { setComments, setError, setLoading } from './actions';
import { CommentsActionType } from './types';

function* fetchComments(action: any): SagaIterator {
  try {
    const comments = yield call(CommentsApi.getById, action.payload);
    yield put(setComments(comments));
  } catch (e) {
    yield put(setError('Что-то пошло не так.'));
  } finally {
    yield put(setLoading(false));
  }
}

function* CommentsSaga() {
  yield takeEvery(CommentsActionType.FETCH_COMMENTS, fetchComments);
}

export default CommentsSaga;
