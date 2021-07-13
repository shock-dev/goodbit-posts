import { RootState } from '../types';

export const selectPosts = (state: RootState) => state.posts;

export const selectPostsItems = (state: RootState) => selectPosts(state).items;

export const selectPostsStatus = (state: RootState) => selectPosts(state).status;

export const selectPostsCreatingLoading = (state: RootState) => selectPosts(state).creatingStatus;

export const selectPostsError = (state: RootState) => selectPosts(state).error;
