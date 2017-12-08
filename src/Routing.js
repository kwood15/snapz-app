import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Gallery } from 'components/Gallery';
import { Pages } from 'components/Pages';

const Routing = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Gallery.Wrapper}
    />
    <Route
      path="/you"
      component={Pages.You}
    />
    <Route
      path="/explore/create"
      component={Pages.Create}
    />
    <Route
      path="/explore/upload"
      component={Pages.Upload}
    />
    <Route
      path="/trending"
      component={Pages.Trending}
    />
  </Switch>
);

export default Routing;