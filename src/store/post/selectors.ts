import { RootState } from '../types';

export const selectPost = (state: RootState) => state.post;

export const selectPostData = (state: RootState) => selectPost(state).data;

export const selectPostLoading = (state: RootState) => selectPost(state).loading;

export const selectPostError = (state: RootState) => selectPost(state).error;
