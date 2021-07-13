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
  FETCH_CREATING_POST = '@posts/FETCH_CREATING_POST',
  FETCH_UPDATING_POST = '@posts/FETCH_UPDATING_POST',
  FETCH_DELETING_POST = '@posts/FETCH_DELETING_POST',

  SET_POSTS = '@posts/SET_POSTS',
  SET_ERROR = '@posts/SET_ERROR',
  SET_STATUS = '@posts/SET_STATUS',

  ADD_POST = '@posts/ADD_POST',
  UPDATE_POST = '@posts/UPDATE_POST',
  DELETE_POST = '@posts/DELETE_POST',
  SET_CREATING_LOADING = '@posts/SET_CREATING_LOADING',
}
