import React from 'react';
// import { Link } from 'react-router-dom';
import css from './menu.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../../assets/logo.svg';

const Menu = () => {
  return (
    <main>
      {/* <section className={css.menuSection}> */}
      <section>
        <Row className={css.menuDiv}>
          <Col xs={3}>
            <header className={css.logoDiv}>
              <img src={logo} alt="CollabTranslation" />
            </header>
          </Col>

          {/* <div className={css.menuDiv}> */}
          <Col lg={true}>
            <Navbar>
              <Nav className="mr-auto">
                <Nav.Link className={css.link} href="/">
                  Home
                </Nav.Link>
                <span>/</span>

                <Nav.Link className={css.link} href="/Services">
                  Services
                </Nav.Link>
                <span>/</span>

                <Nav.Link className={css.link} href="/Prices">
                  Prices & Combos{' '}
                </Nav.Link>
                <span>/</span>

                <Nav.Link className={css.link} href="/AboutUs">
                  About Us
                </Nav.Link>
                <span>/</span>

                <Nav.Link className={css.link} href="/Associations">
                  Associations & Certificates
                </Nav.Link>
                <span>/</span>

                <Nav.Link className={css.link} href="/Terms">
                  Terms & Conditions
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Menu;
