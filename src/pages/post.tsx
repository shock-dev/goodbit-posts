import React, { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Comment from '../components/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../store/post/actions';
import { selectPostData, selectPostError, selectPostLoading } from '../store/post/selectors';
import Spinner from '../components/Spinner';

const OnePostPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(selectPostLoading);
  const error = useSelector(selectPostError);
  const post = useSelector(selectPostData);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, []);

  if (!post && error) {
    history.push('/posts');
  }

  return (
    <>
      <Link to="/posts" className="btn btn-outline-primary mb-2">Назад</Link>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
        </>
      )}
      <h3 className="pb-2">Комментарии</h3>
      <Comment />
      <h3 className="pb-2">Оставить комментарий</h3>
      <form className="mb-5">
        <div className="form-group w-75">
          <textarea
            className="form-control mb-3"
            rows={5}
          />
        </div>
        <button className="btn btn-success">Отправить</button>
      </form>
    </>
  );
};

export default OnePostPage;
