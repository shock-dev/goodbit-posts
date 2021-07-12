import React from 'react';
import { Link } from 'react-router-dom';
import Comment from '../components/Comment';

const OnePostPage = () => {
  return (
    <>
      <Link to="/posts" className="btn btn-outline-primary mb-2">Назад</Link>
      <h1>Title</h1>
      <p>
        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
        несколько абзацев более менее осмысленного текста рыбы на
        русском языке, а начинающему оратору отточить навык публичных выступлений
        в домашних условиях. При создании генератора мы использовали небезизвестный
        универсальный код речей. Текст генерируется абзацами случайным образом от двух
        до десяти предложений
      </p>
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
