
import React from 'react';

import PostList from '../pages/PostList';
import Login from '../pages/Login';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={PostList} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
