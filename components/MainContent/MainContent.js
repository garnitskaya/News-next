import { useEffect, useRef, useState } from 'react';

import HeroSection from '../HeroSection/HeroSection';
import Stat from '../Stat/Stat';
import NewsSection from '../NewsSection/NewsSection';
import BigNewsSections from '../BigNewsSection/BigNewsSections';
import VideoSection from '../VideoSection/VideoSection';
import { Context } from './../../contexts/Contexts';

const MainContent = () => {
  const [clientWidth, setClientWidth] = useState(null);
  const ref = useRef(null);

  const resizeHandler = () => {
    const { clientWidth } = ref.current;
    setClientWidth(clientWidth)
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [clientWidth]);

  return (
    <main ref={ref}>
      <Context.Provider value={clientWidth}>
        <Stat />
        <HeroSection />
        <NewsSection />
        <VideoSection />
        <BigNewsSections />
      </Context.Provider>
    </main>
  );
};

export default MainContent;