import Link from "next/link";
import styles from "./CitiesBlock.module.scss";

const cities = [
  { id: 1, title: "Київ", path: "/" },
  { id: 2, title: "Одеса", path: "/news" },
  { id: 3, title: "Харків", path: "/politics" },
];

const CitiesBlock = ({ clazz }) => {
  return (
    <div className={`${styles.cities} ${clazz}`}>
      {cities.map(({ id, title, path }) => (
        <Link key={id} href={path}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default CitiesBlock;
