import React from 'react';
import Menu from '../../components/Menu/Menu';
import css from './styles.module.css';
import HorizontalPanel from '../../components/HorizontalPanel/HorizontalPanel';
import VerticalPanels from '../../components/VerticalPanels/VerticalPanels';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';

export default function Home() {
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
          linkPage="/"
          icon="article"
        />

        <VerticalPanels
          titleCard="TRANSCRIPTION"
          paragraph="Our professional native translators have many years of experience in
        different areas."
          backgroudColor="#E80E9F"
          iconColor="white"
          linkPage="/"
          icon="create"
        />

        <VerticalPanels
          titleCard="LOCALIZATION"
          paragraph="Why simply translate the information, Websites or Apps, if you can
        count on us to be professional, timely, efficient and ensure that your
        target customers are being approached in the best way?"
          backgroudColor="#EDEDED"
          iconColor="black"
          linkPage="/"
          icon="location_on"
        />

        <VerticalPanels
          titleCard="INTERPRETER"
          paragraph="Nowadays technology allows us to communicate with everyone. Let us be
        your voice and help you interact with your clients, no matter what
        language they speak."
          backgroudColor="#FF9A00"
          iconColor="white"
          linkPage="/"
          icon="textsms"
        />
      </div>

      <HomeCarousel />
    </div>
  );
}
