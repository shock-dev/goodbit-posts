import { PostsState } from './posts/types';
import { PostState } from './post/types';

export interface RootState {
  posts: PostsState
  post: PostState
}
