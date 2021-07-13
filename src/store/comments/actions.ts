import { action } from 'typesafe-actions';
import { CommentsActionType } from './types';
import { IComment } from '../../interfaces/Comment';
import { EntityState } from '../types';
import { ICreateCommentForm } from '../../pages/post';

export const fetchComments = (id: string) => action(CommentsActionType.FETCH_COMMENTS, id);

export const fetchCreatingComment = (payload: ICreateCommentForm) => action(CommentsActionType.FETCH_CREATING_COMMENT, payload);

export const fetchDeletingComment = (id: string) => action(CommentsActionType.FETCH_DELETING_COMMENT, id);

export const deleteComment = (id: string) => action(CommentsActionType.REMOVE_COMMENT, id);

export const addComment = (payload: IComment) => action(CommentsActionType.ADD_COMMENT, payload);

export const setStatus = (status: EntityState) => action(CommentsActionType.SET_STATUS, status);

export const setCreatingStatus = (status: EntityState) => action(CommentsActionType.SET_CREATING_STATUS, status);

export const setError = (msg: string) => action(CommentsActionType.SET_ERROR, msg);

export const setComments = (comments: IComment[]) => action(CommentsActionType.SET_COMMENTS, comments);
