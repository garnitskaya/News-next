import Link from "next/link";
import classNames from "classnames";
import ItemLabel from "../ItemLabel/ItemLabel";
import styles from "./NewsList.module.scss";

const NewsItem = ({ id, text, time, label, icon, important, style }) => {
  const itemClass = classNames({
    [styles.item]: true,
    [styles.extraСlass]: style === "regions",
    [styles.gradient]: style === "gradient",
    [styles.newsBlock]: style === "newsBlock",
  });

  return (
    <li className={itemClass}>
      {label ? (
        <ItemLabel important={important} icon={icon} title={label} />
      ) : null}
      <Link
        href="/"
        className={`${styles.link} ${important ? styles.important : ""}`}
      >
        <span className={styles.time}>{time}</span>
        {text}
      </Link>
    </li>
  );
};

export default NewsItem;
