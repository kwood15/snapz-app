import React from 'react';
import { Navbar, Button, Icon } from 'nebula-react';

const MainHeader = () => (
  <header>
    <Navbar.Wrapper>
      <Navbar.Overlay />
      <Navbar.Inner>
        <Navbar.Toggle.Wrapper>
          <Navbar.Toggle.Bars />
        </Navbar.Toggle.Wrapper>
        <Navbar.Logo to="/nebula" width="45px">
          <img src={nebula} alt="React logo" />
        </Navbar.Logo>
        <Navbar.ContentWrapper>
          <Navbar.Content>
            <Navbar.Item>
              <Navbar.Link to="/nebula/planets">
                Planets
              </Navbar.Link>
            </Navbar.Item>
            <Navbar.Dropdown.Wrapper clickOutsideToClose>
              <Navbar.Dropdown.Toggle className="is-active">
                Galaxies
              </Navbar.Dropdown.Toggle>
              <Navbar.Dropdown.Content>
                <Navbar.Item>
                  <Navbar.Link to="/nebula/galaxies/milky-way">
                    Milky Way
                  </Navbar.Link>
                </Navbar.Item>
                <Navbar.Item>
                  <Navbar.Link to="/nebula/galaxies/andromeda" className="is-active">
                    Andromeda
                  </Navbar.Link>
                </Navbar.Item>
              </Navbar.Dropdown.Content>
            </Navbar.Dropdown.Wrapper>
            <Navbar.Item>
              <Navbar.Link to="/nebula/pulsars">
                <Icon verticalAlign="middle" width="24px" height="24px" iconPosition="right" icon={lightbulb}>
                  Pulsars
                </Icon>
              </Navbar.Link>
            </Navbar.Item>
          </Navbar.Content>
          <Navbar.Content right keepAtTop>
            <Navbar.Item tag="div" resetLineHeight>
              <Button size="sm" theme="alpha">
                CTA
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar.ContentWrapper>
      </Navbar.Inner>
    </Navbar.Wrapper>
  </header>
);

export default MainHeader;