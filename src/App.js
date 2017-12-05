import React from 'react';
import { Route } from 'react-router-dom';
import { Section } from 'nebula-react';

import Create from 'components/Pages/Create';

import Header from 'components/Layout/Header';
import Main from 'components/Layout/Main';
import Footer from 'components/Layout/Footer';

const App = () => (
  <Section>
    <Route
      exact
      path="/"
    />
    <Route path="/you" />
    <Route
      path="/explore/create"
      component={Create}
    />
    <Route path="/explore/upload" />
    <Route path="/trending/latest" />
    <Header />
    <Main />
    <Footer />
  </Section>
);

export default App;