import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from './pages/posts';
import Post from './pages/post';

const App = () => {
  return (
    <Switch>
      <Route path="/posts" exact>
        <Posts />
      </Route>
      <Route path="/posts/:id">
        <Post />
      </Route>
      <Redirect from="/" to="/posts" />
    </Switch>
  );
};

export default App;
