import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from 'nebula-react';

const Footer = () => (
  <footer className="c-footer u-text-center">
    <Section size="sm">
      <div className="c-footer__content">
        <p className="c-footer__text">&copy; Snapz. 2017</p>
        <div className="c-footer__links">
          <Link to="/" className="c-footer__link">Facebook</Link>
          <Link to="/" className="c-footer__link">Twitter</Link>
          <Link to="/" className="c-footer__link">Google+</Link>
        </div>
      </div>
    </Section>
  </footer>
);

export default Footer;