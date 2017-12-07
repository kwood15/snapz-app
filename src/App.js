import React from 'react';
import { Section } from 'nebula-react';

import { Layout } from 'components/Layout';

const App = () => (
  <Section>
    <Layout.Header />
    <Layout.Main />
    <Layout.Footer />
  </Section>
);

export default App;