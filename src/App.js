import React from 'react';
import {
  Section,
  SiteWrap,
  Grid
} from 'nebula-react';

import MainHeader from './components/Layout/Header';

const App = () => (
  <Section size="md">
    <SiteWrap padding>
      <Grid.Wrapper matrix gutter="md">
        <Grid.Item width={['3/4', '1/2@md']}>
          <MainHeader />
        </Grid.Item>
      </Grid.Wrapper>
    </SiteWrap>
  </Section>
);

export default App;