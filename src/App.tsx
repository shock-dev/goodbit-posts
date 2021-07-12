import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from './pages/posts';
import Post from './pages/post';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './store/posts/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container pt-4" style={{ maxWidth: '1000px' }}>
      <Switch>
        <Route path="/posts" exact>
          <Posts />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Redirect from="/" to="/posts" />
      </Switch>
    </div>
  );
};

export default App;
