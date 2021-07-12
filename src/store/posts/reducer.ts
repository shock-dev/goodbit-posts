import produce from 'immer';
import { PostsActionType, PostsState } from './types';

const initialState: PostsState = {
  items: [],
  loading: false,
  error: undefined
};

const posts = produce((draft, action) => {
  switch (action.type) {
    case PostsActionType.FETCH_POSTS:
      draft.error = undefined;
      draft.loading = true;
      break;

    case PostsActionType.SET_POSTS:
      draft.items = action.payload;
      break;

    case PostsActionType.SET_LOADING:
      draft.loading = action.payload;
      break;

    case PostsActionType.SET_ERROR:
      draft.error = action.payload;
      break;

    default:
      break;
  }
}, initialState);

export default posts;
