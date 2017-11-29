import React from 'react';
import { Section, SiteWrap } from 'nebula-react';

import Gallery from '../../components/Gallery/index';

const Main = () => (
  <Section size="md">
    <SiteWrap padding>
      <Gallery />
    </SiteWrap>
  </Section>
);

export default Main;