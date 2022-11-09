import styles from "./ItemLabel.module.scss";
import Image from "next/image";

const ItemLabel = ({ icon, title, important }) => {
  return (
    <div className={`${important && styles.importantBlock} ${styles.block}`}>
      <Image
        className={styles.image}
        src={icon}
        alt={title}
        width={16}
        height={16}
      />
      {title}
    </div>
  );
};

export default ItemLabel;
