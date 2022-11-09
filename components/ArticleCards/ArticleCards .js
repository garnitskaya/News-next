import { useContext } from 'react';
import classNames from "classnames";

import Button from '../Button/Button';
import ArticleCard from "./ActicleCard";
import { Context } from './../../contexts/Contexts';

import styles from "./ArticleCards.module.scss";

const ArticleCards = ({ articles, display = "flex" }) => {
  const clientWidth = useContext(Context);

  const cardsClass = classNames({
    [styles.cards]: true,
    [styles.grid]: display === "grid",
    [styles.flex]: display === "flex",
  });

  return (
    <div className={cardsClass}>
      {articles.map((item, i) => {
        if (clientWidth <= 768 && i >= 3) return;
        return <ArticleCard key={item.id} {...item} />
      })}
      {clientWidth <= 768 && <Button type="more">Більше</Button>}
    </div>
  );
};

export default ArticleCards;
