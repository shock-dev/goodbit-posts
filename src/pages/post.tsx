import React, { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Comment from '../components/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../store/post/actions';
import { selectPostData, selectPostError, selectPostLoading } from '../store/post/selectors';
import Spinner from '../components/Spinner';
import { fetchComments } from '../store/comments/actions';
import { selectCommentsItems, selectCommentsLoading } from '../store/comments/selectors';

const OnePostPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const postLoading = useSelector(selectPostLoading);
  const commentsLoading = useSelector(selectCommentsLoading);
  const error = useSelector(selectPostError);
  const post = useSelector(selectPostData);
  const comments = useSelector(selectCommentsItems);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    document.title = 'Страница поста';
    dispatch(fetchPost(id));
    dispatch(fetchComments(id));
  }, []);

  if (!post && error) {
    history.push('/posts');
  }

  return (
    <>
      <Link to="/posts" className="btn btn-outline-primary mb-2">Назад</Link>
      {postLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
        </>
      )}
      <h3 className="pb-2">Комментарии</h3>
      {commentsLoading ? (
        <Spinner />
      ) : (
        comments.map((item, index) =>
          <Comment
            key={index}
            index={index}
            text={item.body}
          />
        )
      )}
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
