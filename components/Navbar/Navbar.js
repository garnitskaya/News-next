import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <NavbarTop />
      <NavbarBottom />
    </header>
  );
};

export default Navbar;
