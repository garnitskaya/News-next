import { useContext } from 'react';

import Container from "./../Container/Container";
import WrapContentBlock from './../WrapContentBlock/WrapContentBlock';
import Button from './../Button/Button';
import { Context } from './../../contexts/Contexts';
import Content from './Content';

import styles from "./VideoSection.module.scss";

const VideoSection = () => {
  const clientWidth = useContext(Context);

  return (
    <section className={styles.block}>
      <Container>
        <WrapContentBlock
          color='white'
          title='Відео'
          link={clientWidth >= 768 ?
            <Button
              children='Більше новин'
              type='right' /> :
            <Button
              children='Більше відео'
              type='orange' />}
        >
          <Content clientWidth={clientWidth} />
        </WrapContentBlock>
      </Container>
    </section>
  );
};

export default VideoSection;
