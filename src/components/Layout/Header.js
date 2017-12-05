import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Form, Icon } from 'nebula-react';

import logo from 'img/logo.svg';

const Header = ({ brandText }) => (
  <header>
    <Navbar.Wrapper>
      <Navbar.Overlay />
      <Navbar.Inner>
        <Navbar.Toggle.Wrapper>
          <Navbar.Toggle.Bars />
        </Navbar.Toggle.Wrapper>
        <Navbar.Logo to="/">
          <Icon
            icon={logo}
            iconPosition="left"
            width="35px"
            height="35px"
            fill="#c3c3c3"
          >
            {brandText}
          </Icon>
        </Navbar.Logo>
        <Navbar.ContentWrapper>
          <Navbar.Content>
            <Navbar.Item>
              <Navbar.Link to="/you/profile">
                You
              </Navbar.Link>
            </Navbar.Item>
            <Navbar.Dropdown.Wrapper clickOutsideToClose>
              <Navbar.Dropdown.Toggle>
                Explore
              </Navbar.Dropdown.Toggle>
              <Navbar.Dropdown.Content>
                <Navbar.Item>
                  <Navbar.Link to="/explore/create">
                    Create
                  </Navbar.Link>
                </Navbar.Item>
                <Navbar.Item>
                  <Navbar.Link to="/explore/upload">
                    Upload
                  </Navbar.Link>
                </Navbar.Item>
              </Navbar.Dropdown.Content>
            </Navbar.Dropdown.Wrapper>
            <Navbar.Item>
              <Navbar.Link
                to="/trending/latest"
                className="is-active"
              >
                Trending
              </Navbar.Link>
            </Navbar.Item>
          </Navbar.Content>
          <Navbar.Content
            right
            keepAtTop
          >
            <Navbar.Item
              tag="div"
              resetLineHeight
            >
              <Form.SearchWrapper submitPosition="right">
                <Form.SearchInput small />
                <Form.SearchSubmit theme="alpha" />
              </Form.SearchWrapper>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar.ContentWrapper>
      </Navbar.Inner>
    </Navbar.Wrapper>
  </header>
);

Header.defaultProps = {
  brandText: 'Snapz'
};

Header.propTypes = {
  brandText: PropTypes.string
};

export default Header;