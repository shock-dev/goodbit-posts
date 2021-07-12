import { combineReducers } from 'redux';
import posts from './posts/reducer';
import post from './post/reducer';
import comments from './comments/reducer';

const root = combineReducers({
  posts,
  post,
  comments
});

export default root;
