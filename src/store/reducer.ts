import { combineReducers } from 'redux';
import posts from './posts/reducer';

const root = combineReducers({
  posts
});

export default root;
