import { IPost } from '../../interfaces/Post';
import { EntityState } from '../types';

export interface PostsState {
  items: IPost[]
  status: EntityState
  creatingStatus: EntityState
  error?: string
}

export enum PostsActionType {
  FETCH_POSTS = '@posts/FETCH_POSTS',

  SET_POSTS = '@posts/SET_POSTS',
  SET_ERROR = '@posts/SET_ERROR',
  SET_STATUS = '@posts/SET_STATUS',

  FETCH_CREATING_POST = '@posts/FETCH_CREATING_POST',
  ADD_POST = '@posts/ADD_POST',
  SET_CREATING_LOADING = '@posts/SET_CREATING_LOADING',
}
