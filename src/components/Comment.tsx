import React, { ChangeEvent, MouseEventHandler, useState } from 'react';
import { IComment } from '../interfaces/Comment';
import { useDispatch } from 'react-redux';
import { fetchUpdatingComment } from '../store/comments/actions';

interface CommentProps {
  id: number
  index: number
  text: IComment['body']
  onDelete: MouseEventHandler<HTMLButtonElement>
}

const Comment = ({
  id,
  index,
  text,
  onDelete
}: CommentProps) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [body, setBody] = useState(text);

  const changeBodyHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  const updateCommentHandler = () => {
    dispatch(fetchUpdatingComment(id.toString(), body));
    setIsEdit(false);
  };

  const cancelUpdatingHandler = () => {
    setIsEdit(false);
    setBody(text);
  };

  return (
    <div className="card w-100 mb-3">
      <div className="card-body">
        <h5 className="card-title">#{index + 1}</h5>
        {isEdit ? (
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3"
              value={body}
              onChange={changeBodyHandler}
            />
          </div>
        ) : (
          <p className="card-text">{text}</p>
        )}
        {isEdit ? (
          <div>
            <button
              className="btn btn-success"
              style={{ marginRight: '10px' }}
              onClick={updateCommentHandler}
            >
              <i className="bi bi-check-lg" />
            </button>
            <button
              className="btn btn-danger"
              onClick={cancelUpdatingHandler}
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-warning"
              style={{ marginRight: '10px' }}
              onClick={() => setIsEdit(true)}
            >
              <i className="bi bi-pen" />
            </button>
            <button className="btn btn-danger" onClick={onDelete}>
              <i className="bi bi-trash" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
