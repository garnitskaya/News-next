import Image from "next/image";
import styles from "./HeroSection.module.scss";

const HeroSectionBloks = ({ data, setActiveBlock, activeBlock, offset }) => {
  return (
    <div className={styles.blocks}>
      <div
        className={styles.wrapSlider}
        style={{ transform: `translateX(${offset}px)` }}
      >
        {data.map(({ id, title }) => (
          <div
            className={`${activeBlock === id && styles.active} ${styles.item}`}
            key={id}
            onClick={() => setActiveBlock(id)}
          >
            <div className={styles.wrapImg}>
              <Image src={`/image/image_${id}.jpg`} alt={title} fill />
            </div>
            <p className={styles.text}>{title.slice(0, 70) + "..."}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSectionBloks;
