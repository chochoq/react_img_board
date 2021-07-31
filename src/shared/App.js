
import React from 'react';

import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Join from '../pages/Join';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={PostList} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
