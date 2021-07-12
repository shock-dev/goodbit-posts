import produce from 'immer';
import { CommentsActionType, CommentsState } from './types';

const initialState: CommentsState = {
  items: [],
  loading: false,
  error: undefined
};

const comments = produce((draft, action) => {
  switch (action.type) {
    case CommentsActionType.FETCH_COMMENTS:
      draft.error = undefined;
      draft.loading = true;
      break;

    case CommentsActionType.SET_COMMENTS:
      draft.items = action.payload;
      break;

    case CommentsActionType.SET_LOADING:
      draft.loading = action.payload;
      break;

    case CommentsActionType.SET_ERROR:
      draft.error = action.payload;
      break;

    default:
      break;
  }
}, initialState);

export default comments;
