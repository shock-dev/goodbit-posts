import { action } from 'typesafe-actions';
import { PostsActionType } from './types';
import { IPost } from '../../interfaces/Post';

export const fetchPosts = () => action(PostsActionType.FETCH_POSTS);

export const setLoading = (flag: boolean) => action(PostsActionType.SET_LOADING, flag);

export const setError = (msg: string) => action(PostsActionType.SET_ERROR, msg);

export const setPosts = (posts: IPost[]) => action(PostsActionType.SET_POSTS, posts);
