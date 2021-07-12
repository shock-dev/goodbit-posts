import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="card">
      <div className="card-body">
        {isEdit ? (
          <div>
            <input
              type="text"
              className="form-control mb-2"
              value="Special title treatment"
            />
            <textarea
              className="form-control mb-2"
              value="With supporting text below as a natural lead-in to additional content."
              rows={3}
            />
          </div>
        ) : (
          <div className="mb-3">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/posts/1" className="btn btn-primary">Посмотреть</Link>
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
