import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { selectPostsItems, selectPostsLoading } from '../store/posts/selectors';
import { fetchPosts } from '../store/posts/actions';
import Spinner from '../components/Spinner';

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsItems);
  const loading = useSelector(selectPostsLoading);
  const [isOpenForm, setIsOpenForm] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {!loading && (
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
      )}
      <h2>Все посты</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="row mt-4">
          {posts.map((post) =>
            <div key={post.id} className="col-sm-6 mb-4">
              <Post
                id={post.id}
                title={post.title}
                body={post.body}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PostsPage;
