import { RootState } from '../types';

export const selectComments = (state: RootState) => state.comments;

export const selectCommentsItems = (state: RootState) => selectComments(state).items;

export const selectCommentsLoading = (state: RootState) => selectComments(state).loading;

export const selectCommentsError = (state: RootState) => selectComments(state).error;
