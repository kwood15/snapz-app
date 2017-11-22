import React from 'react';
import { Section, SiteWrap } from 'nebula-react';

import Gallery from '../../components/Gallery/index';

const Main = () => (
  <Section size="md">
    <SiteWrap padding>
      <h1>Face of the day on Snapz!</h1>
      <Gallery />
    </SiteWrap>
  </Section>
);

export default Main;