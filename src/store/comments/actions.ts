import { action } from 'typesafe-actions';
import { CommentsActionType } from './types';
import { IComment } from '../../interfaces/Comment';

export const fetchComments = (id: string) => action(CommentsActionType.FETCH_COMMENTS, id);

export const setLoading = (flag: boolean) => action(CommentsActionType.SET_LOADING, flag);

export const setError = (msg: string) => action(CommentsActionType.SET_ERROR, msg);

export const setComments = (comments: IComment[]) => action(CommentsActionType.SET_COMMENTS, comments);
