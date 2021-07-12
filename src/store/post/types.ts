import { IPost } from '../../interfaces/Post';

export interface PostState {
  data?: IPost
  loading: boolean
  error?: string
}

export enum PostActionType {
  FETCH_POST = '@posts/FETCH_POST',
  SET_POST = '@posts/SET_POST',
  SET_LOADING = '@posts/SET_LOADING',
  SET_ERROR = '@posts/SET_ERROR'
}
