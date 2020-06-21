import React from 'react';
import css from './styles.module.css';
import Menu from '../../components/Menu/Menu';
import HorizontalPanel from '../../components/HorizontalPanel/HorizontalPanel';
import VerticalPanels from '../../components/VerticalPanels/VerticalPanels';

const Home = () => {
  return (
    <div>
      <Menu />
      <HorizontalPanel />

      <div className={css.allCards}>
        <VerticalPanels
          titleCard="TRANSLATION"
          paragraph="We are able to translate and proofread any kind of document, from
        the simplest to technical or corporative content."
          backgroudColor="#27BED5"
          iconColor="white"
          icon="article"
          linkPage="/"
        />

        <VerticalPanels
          titleCard="TRANSCRIPTION"
          paragraph="Our professional native translators have many years of experience in
          different areas."
          backgroudColor="#E80E9F"
          iconColor="white"
          icon="create"
          linkPage="/"
        />

        <VerticalPanels
          titleCard="LOCALIZATION"
          paragraph="Why simply translate the information, Websites or Apps, if you can
          count on us to be professional, timely, efficient and ensure that your
          target customers are being approached in the best way?"
          backgroudColor="#EDEDED"
          iconColor="black"
          icon="location_on"
          linkPage="/"
        />

        <VerticalPanels
          titleCard="INTERPRETER"
          paragraph="Nowadays technology allows us to communicate with everyone. Let us be
          your voice and help you interact with your clients, no matter what
          language they speak."
          backgroudColor="#FF9A00"
          iconColor="white"
          icon="textsms"
          linkPage="/"
        />
      </div>
    </div>
  );
};

export default Home;
