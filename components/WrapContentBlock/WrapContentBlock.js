import styles from "./WrapContentBlock.module.scss";

const WrapContentBlock = ({ children, title, link, path, color }) => {
  return (
    <div className={styles.block}>
      <div className={styles.titleBlock}>
        <h3 className={`${color ? styles.titleWhite : ""} ${styles.title}`}>
          {title}
        </h3>
        <div className={styles.link}>{link}</div>
      </div>
      {children}
    </div>
  );
};

export default WrapContentBlock;
