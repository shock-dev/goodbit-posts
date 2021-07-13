import { action } from 'typesafe-actions';
import { PostsActionType } from './types';
import { IPost } from '../../interfaces/Post';
import { ICreatePostForm } from '../../pages/posts';
import { EntityState } from '../types';

export const fetchPosts = () => action(PostsActionType.FETCH_POSTS);

export const setPosts = (posts: IPost[]) => action(PostsActionType.SET_POSTS, posts);

export const setStatus = (status: EntityState) => action(PostsActionType.SET_STATUS, status);

export const setError = (msg: string) => action(PostsActionType.SET_ERROR, msg);

export const createPost = (post: ICreatePostForm) => action(PostsActionType.FETCH_CREATING_POST, post);

export const addPost = (post: IPost) => action(PostsActionType.ADD_POST, post);

export const setCreatingLoading = (status: EntityState) => action(PostsActionType.SET_CREATING_LOADING, status);
