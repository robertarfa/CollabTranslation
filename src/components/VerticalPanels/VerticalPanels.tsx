import React from 'react';
import css from './verticalPanels.module.css';

const VerticalPanels = () => {
  return (
    <div className={css.allCards}>
      <div className={css.myCard} style={{ background: '#27BED5' }}>
        <div>
          <span
            className="material-icons"
            style={{ fontSize: '4em', color: 'white' }}
          >
            article
          </span>

          <h4 className={css.litleTitle}>TRANSLATION</h4>
          <p>
            We are able to translate and proofread any kind of document, from
            the simplest to technical or corporative content.
          </p>
          <a href="/">Read More {'>'}</a>
        </div>
      </div>

      <div className={css.myCard} style={{ background: '#E80E9F' }}>
        <span
          className="material-icons"
          style={{ fontSize: '4em', color: 'white' }}
        >
          create
        </span>

        <h4 className={css.litleTitle}>TRANSCRIPTION</h4>
        <p>
          Our professional native translators have many years of experience in
          different areas.
        </p>
        <a href="/">Read More {'>'}</a>
      </div>

      <div className={css.myCard} style={{ background: '#EDEDED' }}>
        <span
          className="material-icons"
          style={{ fontSize: '4em', color: 'black' }}
        >
          location_on
        </span>

        <h4 className={css.litleTitle}>LOCALIZATION</h4>
        <p>
          Why simply translate the information, Websites or Apps, if you can
          count on us to be professional, timely, efficient and ensure that your
          target customers are being approached in the best way?
        </p>
        <a href="/">Read More {'>'}</a>
      </div>

      <div className={css.myCard} style={{ background: '#FF9A00' }}>
        <span
          className="material-icons"
          style={{ fontSize: '4em', color: 'white' }}
        >
          textsms
        </span>

        <h4 className={css.litleTitle}>INTERPRETER</h4>
        <p>
          Nowadays technology allows us to communicate with everyone. Let us be
          your voice and help you interact with your clients, no matter what
          language they speak.
        </p>
        <a href="/">Read More {'>'}</a>
      </div>
    </div>
  );
};

export default VerticalPanels;
