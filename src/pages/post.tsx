import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Comment from '../components/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../store/post/actions';
import { selectPostData, selectPostError, selectPostLoading } from '../store/post/selectors';
import Spinner from '../components/Spinner';
import { fetchComments, fetchCreatingComment, fetchDeletingComment } from '../store/comments/actions';
import { selectCommentsCreatingStatus, selectCommentsItems, selectCommentsStatus } from '../store/comments/selectors';
import { EntityState } from '../store/types';

export interface ICreateCommentForm {
  body: string
  postId: number
}

const OnePostPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const postLoading = useSelector(selectPostLoading);
  const commentsLoading = useSelector(selectCommentsStatus) === EntityState.LOADING;
  const createCommentLoading = useSelector(selectCommentsCreatingStatus) === EntityState.LOADING;
  const createCommentLoaded = useSelector(selectCommentsCreatingStatus) === EntityState.LOADED;
  const error = useSelector(selectPostError);
  const post = useSelector(selectPostData);
  const comments = useSelector(selectCommentsItems);
  const { id }: { id: string } = useParams();
  const [newComment, setNewComment] = useState<ICreateCommentForm>({
    body: '',
    postId: +id
  });

  useEffect(() => {
    document.title = 'Страница поста';
    dispatch(fetchPost(id));
    dispatch(fetchComments(id));
  }, []);

  useEffect(() => {
    if (createCommentLoaded) {
      setNewComment((prev) => ({ ...prev, body: '' }));
    }
  }, [createCommentLoaded]);

  if (!post && error) {
    history.push('/posts');
  }

  const changeCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment((prev) => ({ ...prev, body: e.target.value }));
  };

  const onCreateComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchCreatingComment(newComment));
  };

  const deleteCommentHandler = (id: string) => {
    dispatch(fetchDeletingComment(id));
  };

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
            id={item.id}
            key={index}
            index={index}
            text={item.body}
            onDelete={() => deleteCommentHandler(item.id.toString())}
          />
        )
      )}
      <h3 className="pb-2">Оставить комментарий</h3>
      <form className="mb-5" onSubmit={(e) => onCreateComment(e)}>
        <div className="form-group w-75">
          <textarea
            className="form-control mb-3"
            rows={5}
            value={newComment.body}
            onChange={(e) => changeCommentHandler(e)}
          />
        </div>
        <button className="btn btn-success">
          {createCommentLoading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              style={{ marginRight: '10px' }}
            />
          )}
          Отправить
        </button>
      </form>
    </>
  );
};

export default OnePostPage;
