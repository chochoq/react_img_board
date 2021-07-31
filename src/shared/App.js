
import React from 'react';

import PostList from '../pages/PostList';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={PostList} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
