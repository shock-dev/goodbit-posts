import { PostsState } from './posts/types';
import { PostState } from './post/types';
import { CommentsState } from './comments/types';

export interface RootState {
  posts: PostsState
  post: PostState
  comments: CommentsState
}

export enum EntityState {
  NEVER = 'NEVER',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  LOADED = 'LOADED'
}
