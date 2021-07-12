import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from './pages/posts';
import Post from './pages/post';

const App = () => {
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
