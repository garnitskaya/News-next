import Menu from "./../Menu/Menu";
import Link from "next/link";
import SearchItem from "../SearchItem/SearchItem";
import Socials from "./../Socials/Socials";
import Language from "../Language/Language";
import Container from "../Container/Container";
import CitiesBlock from "../CitiesBlock/CitiesBlock";
import styles from "./Navbar.module.scss";

const socials = [
  { id: 1, icon: "t", path: "https://t.me" },
  { id: 2, icon: "facebook", path: "https://facebook.com/in" },
  { id: 3, icon: "instagram", path: "https://instagram.com" },
  { id: 4, icon: "youtube", path: "https://youtube.com" },
];

const NavbarTop = () => {
  return (
    <div className={styles.top}>
      <Container>
        <div className={styles.wrapper}>
          <Menu />
          <CitiesBlock clazz={styles.topCities} />
          <SearchItem />
          <Socials socials={socials} clazz={styles.navSocials} />
          <span className={styles.border} />
          <Language />
        </div>
      </Container>
    </div>
  );
};

export default NavbarTop;
