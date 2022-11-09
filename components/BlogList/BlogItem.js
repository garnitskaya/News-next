import Link from "next/link";
import Image from "next/image";
import styles from "./BlogList.module.scss";

const BlogItem = ({ id, date, text, profession, name }) => {
  return (
    <li className={styles.item}>
      <Link href="/" className={styles.link}>
        <div className={styles.info}>
          <Image
            src={`/image/Avatar_${id}.png`}
            alt={name}
            width={64}
            height={76}
          />
          <div className={styles.name}>
            {name}
            <span>{profession}</span>
          </div>
        </div>
        <div className={styles.text}> {text}</div>
        <div className={styles.date}>{date}</div>
      </Link>
    </li>
  );
};

export default BlogItem;
