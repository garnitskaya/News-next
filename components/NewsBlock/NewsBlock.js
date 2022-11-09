import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import styles from "./NewsBlock.module.scss";

const NewsBlock = ({ data }) => {
  return (
    <div className={styles.block}>
      <h4 className={styles.title}>Новини розділу</h4>
      <NewsList data={data} style="newsBlock" />
      <Button type="more">Більше</Button>
    </div>
  );
};

export default NewsBlock;
