import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Post from '../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { selectPostsCreatingLoading, selectPostsItems, selectPostsStatus } from '../store/posts/selectors';
import { createPost, fetchPosts } from '../store/posts/actions';
import Spinner from '../components/Spinner';
import { EntityState } from '../store/types';

export interface ICreatePostForm {
  title: string
  body: string
}

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsItems);
  const isLoading = useSelector(selectPostsStatus) === EntityState.LOADING;
  const creatingLoading = useSelector(selectPostsCreatingLoading) === EntityState.LOADING;
  const creatingLoaded = useSelector(selectPostsCreatingLoading) === EntityState.LOADED;
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [postForm, setPostForm] = useState<ICreatePostForm>({
    title: '',
    body: ''
  });

  useEffect(() => {
    document.title = 'Главная - Все посты';
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    if (creatingLoaded) {
      setPostForm({ title: '', body: '' });
      setIsOpenForm(false);
    }
  }, [creatingLoaded]);

  const createPostHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postForm.title.trim() !== '' && postForm.body.trim() !== '') {
      dispatch(createPost(postForm));
    }
  };

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPostForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      {!isLoading && (
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
            <form className="w-75" onSubmit={(e) => createPostHandler(e)}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Название</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  onChange={(e) => changeInputHandler(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="body" className="form-label">Описание</label>
                <textarea
                  className="form-control"
                  id="body"
                  name="body"
                  rows={3}
                  onChange={(e) => changeInputHandler(e)}
                />
              </div>
              <button type="submit" className="btn btn-success" disabled={creatingLoading}>
                {creatingLoading && (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                    style={{ marginRight: '10px' }}
                  />
                )}
                Создать
              </button>
            </form>
          )}
        </div>
      )}
      <h2>Все посты</h2>
      {isLoading ? (
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
