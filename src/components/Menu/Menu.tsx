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
      <section>
        <Row className={css.menuDiv}>
          <Col xs={3}>
            <header className={css.logoDiv}>
              <img src={logo} alt="CollabTranslation" />
            </header>
          </Col>

          <Col sm={true}>
            <Navbar expand="sm">
              <Nav className="xs-auto">
                <Nav.Link className={css.link} href="/">
                  Home /
                </Nav.Link>

                <Nav.Link className={css.link} href="/Services">
                  Services /
                </Nav.Link>

                <Nav.Link className={css.link} href="/Prices">
                  Prices & Combos /
                </Nav.Link>

                <Nav.Link className={css.link} href="/AboutUs">
                  About Us /
                </Nav.Link>

                <Nav.Link className={css.link} href="/Associations">
                  Associations & Certificates /
                </Nav.Link>

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
