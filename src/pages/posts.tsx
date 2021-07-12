import React, { useState } from 'react';
import Post from '../components/Post';

const PostsPage = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <>
      <div className="mb-2">
        <div className="mb-2">
          {isOpenForm ? (
            <button
              className="btn btn-danger"
              onClick={() => setIsOpenForm(false)}
            >
              <i className="bi bi-x-lg" /> Отменить
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => setIsOpenForm(true)}
            >
              <i className="bi bi-plus-lg" /> Создать пост
            </button>
          )}
        </div>
        {isOpenForm && (
          <form className="w-75">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Название</label>
              <input type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Описание</label>
              <textarea className="form-control" id="description" rows={3} />
            </div>
            <button className="btn btn-success">Создать</button>
          </form>
        )}
      </div>
      <h2>Все посты</h2>
      <div className="row mt-4">
        <div className="col-sm-6 mb-4">
          <Post />
        </div>
      </div>
    </>
  );
};

export default PostsPage;
