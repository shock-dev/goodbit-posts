import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import root from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  root,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(saga);

export default store;
