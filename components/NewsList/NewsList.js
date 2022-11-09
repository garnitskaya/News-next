import NewsItem from "./NewsItem";
import styles from "./NewsList.module.scss";

const NewsList = ({ data, style }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <NewsItem key={item.id} style={style} {...item} />
      ))}
    </ul>
  );
};

export default NewsList;
