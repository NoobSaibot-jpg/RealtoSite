import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import logo from '../logo.svg'; // A temporary logo
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <Navbar className="navbar-gradient" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Rialto Ukraine logo"
              />{' '}
              <TypeAnimation
                sequence={[t('rialto_ukraine'), 5000]}
                wrapper="span"
                cursor={false}
                repeat={0}
                style={{ display: 'inline-block' }}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>{t('home')}</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/services">
                <Nav.Link>{t('services')}</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link>{t('projects')}</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>{t('about')}</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>{t('contact')}</Nav.Link>
              </LinkContainer>
              <LanguageSwitcher />
              <ThemeSwitcher />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
