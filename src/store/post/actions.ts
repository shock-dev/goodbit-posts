import { action } from 'typesafe-actions';
import { PostActionType } from './types';
import { IPost } from '../../interfaces/Post';

export const fetchPost = (id: string) => action(PostActionType.FETCH_POST, id);

export const setLoading = (flag: boolean) => action(PostActionType.SET_LOADING, flag);

export const setError = (msg: string) => action(PostActionType.SET_ERROR, msg);

export const setPost = (post: IPost) => action(PostActionType.SET_POST, post);
