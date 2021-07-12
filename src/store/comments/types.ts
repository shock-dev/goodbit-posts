import { IComment } from '../../interfaces/Comment';

export interface CommentsState {
  items: IComment[]
  loading: boolean
  error?: string
}

export enum CommentsActionType {
  FETCH_COMMENTS = '@comments/FETCH_COMMENTS',
  SET_COMMENTS = '@comments/SET_COMMENTS',
  SET_LOADING = '@comments/SET_LOADING',
  SET_ERROR = '@comments/SET_ERROR'
}
