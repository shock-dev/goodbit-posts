import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../interfaces/Post';

const Post = ({
  id,
  title,
  body
}: IPost) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="card">
      <div className="card-body">
        {isEdit ? (
          <div>
            <input
              type="text"
              className="form-control mb-2"
              value={title}
            />
            <textarea
              className="form-control mb-2"
              value={body}
              rows={3}
            />
          </div>
        ) : (
          <div className="mb-3">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/posts/${id}`} className="btn btn-primary">Посмотреть</Link>
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
    </div>
  );
};

export default Post;
