import React from 'react';
import { Route } from 'react-router-dom';

import { Pages } from 'components/Pages';

const Routing = () => (
  <div>
    <Route
      exact
      path="/"
      component={Pages.Gallery}
    />
    <Route path="/you" />
    <Route
      path="/explore/create"
      component={Pages.Create}
    />
    <Route path="/explore/upload" />
    <Route path="/trending/latest" />
  </div>
);

export default Routing;