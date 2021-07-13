import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../interfaces/Post';
import { useDispatch } from 'react-redux';
import { fetchUpdatingPost } from '../store/posts/actions';

const Post = ({
  id,
  title,
  body
}: IPost) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [form, setForm] = useState({ title, body });

  const changeFormHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const updateHandler = () => {
    dispatch(fetchUpdatingPost(id.toString(), form));
    setIsEdit(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        {isEdit ? (
          <div>
            <input
              type="text"
              className="form-control mb-2"
              name="title"
              value={form.title}
              onChange={changeFormHandler}
            />
            <textarea
              className="form-control mb-2"
              value={form.body}
              name="body"
              rows={3}
              onChange={changeFormHandler}
            />
          </div>
        ) : (
          <div className="mb-3">
            <h5 className="card-title">{form.title}</h5>
            <p className="card-text">{form.body}</p>
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/posts/${id}`} className="btn btn-primary">Посмотреть</Link>
          {isEdit ? (
            <div>
              <button
                className="btn btn-success"
                style={{ marginRight: '10px' }}
                onClick={updateHandler}
              >
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
