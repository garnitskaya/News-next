import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.wrapper}>
        <div className={styles.hamburger}>
          <span></span>
          <span></span>
        </div>
        Меню
      </div>
    </div>
  );
};

export default Menu;
