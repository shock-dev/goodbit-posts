import { RootState } from '../types';

export const selectPosts = (state: RootState) => state.posts;

export const selectPostsItems = (state: RootState) => selectPosts(state).items;

export const selectPostsLoading = (state: RootState) => selectPosts(state).loading;

export const selectPostsError = (state: RootState) => selectPosts(state).error;
