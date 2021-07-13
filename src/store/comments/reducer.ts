import produce from 'immer';
import { CommentsActionType, CommentsState } from './types';
import { EntityState } from '../types';

const initialState: CommentsState = {
  items: [],
  status: EntityState.NEVER,
  creatingStatus: EntityState.NEVER,
  error: undefined
};

const comments = produce((draft, action) => {
  switch (action.type) {
    case CommentsActionType.FETCH_COMMENTS:
      draft.error = undefined;
      draft.status = EntityState.LOADING;
      break;

    case CommentsActionType.SET_COMMENTS:
      draft.items = action.payload;
      break;

    case CommentsActionType.SET_STATUS:
      draft.status = action.payload;
      break;

    case CommentsActionType.SET_CREATING_STATUS:
      draft.creatingStatus = action.payload;
      break;

    case CommentsActionType.SET_ERROR:
      draft.error = action.payload;
      break;

    case CommentsActionType.FETCH_CREATING_COMMENT:
      draft.error = undefined;
      draft.creatingStatus = EntityState.LOADING;
      break;

    case CommentsActionType.ADD_COMMENT:
      draft.items.push(action.payload);
      break;

    default:
      break;
  }
}, initialState);

export default comments;
