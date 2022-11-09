import Politics from "./Politics";
import styles from "./Footer.module.scss";
import FooterTop from './FooterTop';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterTop />
      <Politics />
    </footer>
  );
};

export default Footer;
