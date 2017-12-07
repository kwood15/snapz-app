import React from 'react';
import { Section, SiteWrap } from 'nebula-react';

import Routing from 'Routing';

const Main = () => (
  <Section size="md">
    <SiteWrap padding>
      <Routing />
    </SiteWrap>
  </Section>
);

export default Main;