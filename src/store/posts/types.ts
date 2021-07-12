import { IPost } from '../../interfaces/Post';

export interface PostsState {
  items: IPost[]
  loading: boolean
  error?: string
}

export enum PostsActionType {
  FETCH_POSTS = '@posts/FETCH_POSTS',
  SET_POSTS = '@posts/SET_POSTS',
  SET_LOADING = '@posts/SET_LOADING',
  SET_ERROR = '@posts/SET_ERROR'
}
