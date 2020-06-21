import React, { Component } from 'react';
import css from './horizontalPanel.module.css';
import Button from 'react-bootstrap/Button';

export default class HorizontalPanel extends Component {
  render() {
    return (
      <section id="home-container" className={css.homeContainer}>
        <h1 className={`${css.pHome} h1`}> We Simplify the Words</h1>
        <h3 className="h4">
          Professional translation service guaranteed by International
          Translators and
        </h3>
        <h3 className="h4">
          Reviewers specialized in different areas with many years of experience
        </h3>
        <Button className={css.button} variant="warning">
          Request a quote
        </Button>
      </section>
    );
  }
}
