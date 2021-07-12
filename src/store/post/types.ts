import { IPost } from '../../interfaces/Post';

export interface PostState {
  data?: IPost
  loading: boolean
  error?: string
}

export enum PostActionType {
  FETCH_POST = '@post/FETCH_POST',
  SET_POST = '@post/SET_POST',
  SET_LOADING = '@post/SET_LOADING',
  SET_ERROR = '@post/SET_ERROR'
}
