import produce from 'immer';
import { PostsActionType, PostsState } from './types';
import { EntityState } from '../types';
import { IPost } from '../../interfaces/Post';

const initialState: PostsState = {
  items: [],
  status: EntityState.NEVER,
  creatingStatus: EntityState.NEVER,
  error: undefined
};

const posts = produce((draft, action) => {
  switch (action.type) {
    case PostsActionType.FETCH_POSTS:
      draft.status = EntityState.LOADING;
      break;

    case PostsActionType.SET_POSTS:
      draft.items = action.payload;
      draft.status = EntityState.LOADED;
      draft.error = undefined;
      break;

    case PostsActionType.SET_ERROR:
      draft.status = EntityState.ERROR;
      draft.error = action.payload;
      break;

    case PostsActionType.SET_CREATING_LOADING:
      draft.creatingStatus = action.payload;
      break;

    case PostsActionType.FETCH_CREATING_POST:
      draft.creatingStatus = EntityState.LOADING;
      break;

    case PostsActionType.ADD_POST:
      draft.items.unshift(action.payload);
      break;

    case PostsActionType.UPDATE_POST:
      const itemIndex = draft.items.findIndex((item: IPost) => item.id === +action.payload.id);
      draft.items[itemIndex] = action.payload;
      break;

    case PostsActionType.DELETE_POST:
      draft.items.splice(draft.items.find((comment: IPost) => comment.id === action.payload), 1);
      break;

    default:
      break;
  }
}, initialState);

export default posts;
