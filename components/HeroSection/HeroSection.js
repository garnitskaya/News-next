import Container from "../Container/Container";
import Content from "./Content";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <Container>
          <Content />
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
