import produce from 'immer';
import { CommentsActionType, CommentsState } from './types';
import { EntityState } from '../types';
import { IComment } from '../../interfaces/Comment';

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

    case CommentsActionType.REMOVE_COMMENT:
      draft.items.splice(draft.items.find((comment: IComment) => comment.id === action.payload), 1);
      break;

    case CommentsActionType.UPDATE_COMMENT:
      const { id, body } = action.payload;
      console.log({ id, body });
      const itemIndex = draft.items.findIndex((item: IComment) => item.id === +id);
      draft.items[itemIndex].body = body;
      break;

    default:
      break;
  }
}, initialState);

export default comments;
