import { all } from 'redux-saga/effects';
import postsSaga from './posts/saga';
import postSaga from './post/saga';
import commentsSaga from './comments/saga';

export default function* rootSaga() {
  yield all([
    postsSaga(),
    postSaga(),
    commentsSaga()
  ]);
}
