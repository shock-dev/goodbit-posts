import React, { useState } from 'react';
import { IComment } from '../interfaces/Comment';

interface CommentProps {
  index: number
  text: IComment['body']
}

const Comment = ({
  index,
  text
}: CommentProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="card w-100 mb-3">
      <div className="card-body">
        <h5 className="card-title">#{index + 1}</h5>
        {isEdit ? (
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3"
              value={text}
            />
          </div>
        ) : (
          <p className="card-text">{text}</p>
        )}
        {isEdit ? (
          <div>
            <button className="btn btn-success" style={{ marginRight: '10px' }}>
              <i className="bi bi-check-lg" />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setIsEdit(false)}
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
            <button className="btn btn-danger">
              <i className="bi bi-trash" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
