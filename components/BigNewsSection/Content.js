import { useContext, useState } from "react";

import ArticleCards from "../ArticleCards/ArticleCards ";
import NewsBlock from "../NewsBlock/NewsBlock";
import PromoBlock from "../PromoBlock/PromoBlock";
import WrapperContent from "./WrapperContent";
import { Context } from "./../../contexts/Contexts";
import { articles } from "../NewsSection/Content";

import styles from "./BigNewsSections.module.scss";

const Content = ({ data }) => {
  const clientWidth = useContext(Context);
  const [filterPolitics, setfilterPolitics] = useState("news");
  const [filterEconomy, setfilterEconomy] = useState("articles");
  const [filterLifestyle, setfilterLifestyle] = useState("news");

  const onFilterChange = (filter) => { };

  return (
    <>
      <WrapperContent
        title="Політика"
        filter={filterPolitics}
        onFilterChange={onFilterChange}
        clientWidth={clientWidth}
      >
        {clientWidth <= 768 ? (
          filterPolitics == "news" ? (
            <ArticleCards articles={articles.slice(0, 3)} display="grid" />
          ) : (
            <NewsBlock data={data.politics} />
          )
        ) : (
          <>
            <ArticleCards articles={articles.slice(0, 3)} display="grid" />
            <NewsBlock data={data.politics} />
          </>
        )}
      </WrapperContent>

      <WrapperContent title="Промо" subtitle="Всі матеріали">
        <PromoBlock promoSlides={data.promo} />
      </WrapperContent>

      <WrapperContent
        title="Економіка"
        filter={filterEconomy}
        onFilterChange={onFilterChange}
        clientWidth={clientWidth}
      >
        {clientWidth <= 768 ? (
          filterEconomy == "news" ? (
            <ArticleCards articles={articles.slice(0, 3)} display="grid" />
          ) : (
            <NewsBlock data={data.economy} />
          )
        ) : (
          <>
            <ArticleCards articles={articles.slice(0, 3)} display="grid" />
            <NewsBlock data={data.economy} />
          </>
        )}
      </WrapperContent>

      <WrapperContent
        title="Лайфстайл"
        filter={filterLifestyle}
        onFilterChange={onFilterChange}
        clientWidth={clientWidth}
      >
        {clientWidth <= 768 ? (
          filterLifestyle == "news" ? (
            <ArticleCards articles={articles.slice(6, 9)} display="grid" />
          ) : (
            <NewsBlock data={data.lifestyle} />
          )
        ) : (
          <>
            <ArticleCards articles={articles.slice(6, 9)} display="grid" />
            <NewsBlock data={data.lifestyle} />
          </>
        )}
      </WrapperContent>
    </>
  );
};

export default Content;
