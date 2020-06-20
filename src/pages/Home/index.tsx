import React from 'react';
//import './styles.css';
import Menu from '../../components/Menu/Menu';
import HorizontalPanel from '../../components/HorizontalPanel/HorizontalPanel';
import VerticalPanels from '../../components/VerticalPanels/VerticalPanels';

const Home = () => {
  return (
    <div>
      <Menu />
      <HorizontalPanel />
      <VerticalPanels />
    </div>
  );
};

export default Home;
