import Image from "next/image";
import Link from "next/link";

import styles from "./Socials.module.scss";

const Socials = ({ socials, clazz }) => {
  return (
    <ul className={`${styles.socials} ${clazz}`}>
      {socials.map(({ id, icon, path, name }) => (
        <li key={id}>
          <Link href={path} target="_blank">
            <Image
              src={`/icons/${icon}.svg`}
              width={22}
              height={22}
              alt={icon}
            />
            {name && <span className={styles.name}>{name}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
