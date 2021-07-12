import { combineReducers } from 'redux';
import posts from './posts/reducer';
import post from './post/reducer';

const root = combineReducers({
  posts,
  post
});

export default root;
