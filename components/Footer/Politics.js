import Link from "next/link";
import Container from "./../Container/Container";
import styles from "./Footer.module.scss";

const Politics = () => {
  return (
    <Container>
      <div className={styles.politics}>
        <p className={styles.copyright}>© 2020-2022, ТОВ «Медіа Мережі»</p>
        <div className={styles.block}>
          <Link href="/">Політика користувача</Link>
          <Link href="/">Політика конфіденційності</Link>
          <Link href="/">Політика Cookie-файлів</Link>
        </div>
      </div>
    </Container>
  );
};

export default Politics;
