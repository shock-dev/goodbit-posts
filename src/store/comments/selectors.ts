import { RootState } from '../types';

export const selectComments = (state: RootState) => state.comments;

export const selectCommentsItems = (state: RootState) => selectComments(state).items;

export const selectCommentsStatus = (state: RootState) => selectComments(state).status;

export const selectCommentsCreatingStatus = (state: RootState) => selectComments(state).creatingStatus;

export const selectCommentsError = (state: RootState) => selectComments(state).error;
