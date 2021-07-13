import { IComment } from '../../interfaces/Comment';
import { EntityState } from '../types';

export interface CommentsState {
  items: IComment[]
  status: EntityState
  creatingStatus: EntityState
  error?: string
}

export enum CommentsActionType {
  FETCH_COMMENTS = '@comments/FETCH_COMMENTS',
  FETCH_CREATING_COMMENT = '@comments/FETCH_CREATING_COMMENT',
  SET_COMMENTS = '@comments/SET_COMMENTS',
  ADD_COMMENT = '@comments/ADD_COMMENT',
  SET_STATUS = '@comments/SET_STATUS',
  SET_CREATING_STATUS = '@comments/SET_CREATING_STATUS',
  SET_ERROR = '@comments/SET_ERROR'
}
