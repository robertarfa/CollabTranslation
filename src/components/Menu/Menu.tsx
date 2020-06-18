import React from 'react';
import { Link } from 'react-router-dom';
import css from './menu.module.css';

import logo from '../../assets/logo.svg';

// function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
//   event.preventDefault()
// }

const Menu = () => {
  return (
    <main>
      <section className={css.menuSection}>
        <header className={css.logoDiv}>
          <img src={logo} alt="CollabTranslation" />
        </header>

        <div className={css.menuDiv}>
          <Link className={css.link} to="/">
            Home
          </Link>
          <span>/</span>

          <Link className={css.link} to="/Services">
            Services
          </Link>
          <span>/</span>

          <Link className={css.link} to="/Prices">
            Prices & Combos
          </Link>
          <span>/</span>

          <Link className={css.link} to="/AboutUs">
            About Us
          </Link>
          <span>/</span>

          <Link className={css.link} to="/Associations">
            Associations & Centificates
          </Link>
          <span>/</span>

          <Link className={css.link} to="/Terms">
            Terms & Conditions
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Menu;
