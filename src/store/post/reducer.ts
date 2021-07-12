import produce from 'immer';
import { PostActionType, PostState } from './types';

const initialState: PostState = {
  data: undefined,
  loading: false,
  error: undefined
};

const post = produce((draft, action) => {
  switch (action.type) {
    case PostActionType.FETCH_POST:
      draft.error = undefined;
      draft.loading = true;
      break;

    case PostActionType.SET_POST:
      draft.data = action.payload;
      break;

    case PostActionType.SET_LOADING:
      draft.loading = action.payload;
      break;

    case PostActionType.SET_ERROR:
      draft.error = action.payload;
      break;

    default:
      break;
  }
}, initialState);

export default post;
