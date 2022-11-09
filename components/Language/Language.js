import { useState } from "react";
import Link from "next/link";

import styles from "./Language.module.scss";

const data = [
  { id: 1, title: "ru", path: "/" },
  { id: 2, title: "ua", path: "/" },
];

const Language = () => {
  const [language, setLanguage] = useState("ua");
  const [activeLanguage, setActiveLanguage] = useState(false);

  const onShowLanguage = () => {
    setActiveLanguage(!activeLanguage);
  };

  const itemtLanguage = data.map(({ id, title, path }) => (
    <li key={id}>
      <Link className={language === title ? styles.active : ""} href={path}>
        {title}
      </Link>
    </li>
  ));

  return (
    <div
      className={`${styles.wrap}  ${activeLanguage ? styles.active : ""}`}
      onClick={onShowLanguage}
    >
      <div className={styles.title}>{language}</div>
      <ul className={styles.content}>{itemtLanguage}</ul>
    </div>
  );
};

export default Language;
