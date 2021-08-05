
import React from 'react';

import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Join from '../pages/Join';
import Header from '../components/Header';
import {Grid} from '../elements/index';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Grid>
        <BrowserRouter>
          <Header/>
            <Route exact path="/" component={PostList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/join" component={Join} />
          </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
