import React, { Component } from 'react';
import css from './horizontalPanel.module.css';

export default class HorizontalPanel extends Component {
  render() {
    return (
      <section id="home-container" className={css.homeContainer}>
        <p className={css.pHome}> We Simplify the Words</p>
        <p>
          Professional translation service guaranteed by International
          Translators and
        </p>
        <p>
          Reviewers specialized in different areas with many years of experience
        </p>
      </section>
    );
  }
}
