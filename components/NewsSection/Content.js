import React, { useContext, useState } from "react";

import WrapContentBlock from "../WrapContentBlock/WrapContentBlock";
import WrapContent from "../WrapContent/WrapContent";
import NewsList from "../NewsList/NewsList";
import ArticleCards from "../ArticleCards/ArticleCards ";
import FilterItem from "../FilterItem/FilterItem";
import Button from "../Button/Button";
import { Context } from "./../../contexts/Contexts";

import styles from "./NewsSection.module.scss";

const data = {
  kyiv: [
    {
      date: "05 серпня",
      data: [
        {
          id: 1,
          path: "/",
          time: "14:59",
          text: "ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи",
        },
        {
          id: 2,
          path: "/",
          time: "14:59",
          text: "На Київщині загиблого під час окупації чоловіка знайшли у колодязі: його прикмети",
        },
      ],
    },
    {
      date: "04 серпня",
      data: [
        {
          id: 3,
          path: "/",
          time: "14:59",
          text: "КМДА контролюватиме якість підготовки до опалювального сезону",
        },
        {
          id: 4,
          path: "/",
          time: "14:59",
          text: "Дружина Зеленського чесно зізналася, чи боїться смерті",
        },
        {
          id: 5,
          path: "/",
          time: "14:59",
          text: "ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи",
        },
      ],
    },
  ],
  odesa: [
    {
      date: "05 серпня",
      data: [
        {
          id: 1,
          path: "/",
          time: "14:59",
          text: "Ремонт зруйнованого російськими ракетами будинку у Сергіївці коштуватиме понад 40 млн гривень",
        },
        {
          id: 2,
          path: "/",
          time: "14:59",
          text: "На Одещині рибалки незаконно наловили раків на 8 млн гривень",
        },
        {
          id: 3,
          path: "/",
          time: "14:59",
          text: "Екіпаж турецького судна вперше з початку війни повернувся з Одеси додому",
        },
        {
          id: 4,
          path: "/",
          time: "14:59",
          text: "Дружина Зеленського чесно зізналася, чи боїться смерті",
        },
        {
          id: 5,
          path: "/",
          time: "14:59",
          text: "Ремонт зруйнованого російськими ракетами будинку у Сергіївці коштуватиме понад 40 млн гривень",
        },
      ],
    },
  ],
  kharkiv: [
    {
      date: "05 серпня",
      data: [
        {
          id: 1,
          path: "/",
          time: "14:59",
          text: "Ремонт зруйнованого російськими ракетами будинку у Сергіївці коштуватиме понад 40 млн гривень",
        },
        {
          id: 2,
          path: "/",
          time: "14:59",
          text: "Дружина Зеленського чесно зізналася, чи боїться смерті",
        },
        {
          id: 3,
          path: "/",
          time: "14:59",
          text: "Обстріл Павлова Поля у Харкові: уламки прилетіли до квартир, троє людей поранено",
        },
        {
          id: 4,
          path: "/",
          time: "14:59",
          text: "ЗСУ пересунули лінію фронту на Харківщині: окупанти тікали, кидаючи техніку",
        },
        {
          id: 5,
          path: "/",
          time: "14:59",
          text: "На Харківщині, попри щоденні обстріли, тривають жнива: скільки врожаю зібрали",
        },
      ],
    },
  ],
};
export const articles = [
  {
    id: 1,
    text: "Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.",
    date: "05 серпня 11:00",
    image: "/image/image.jpg",
  },
  {
    id: 2,
    text: "Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України.",
    date: "05 серпня 11:00",
    image: "/image/image.jpg",
  },
  {
    id: 3,
    text: "Генерал Романенко оцінив бойовий потенціал і спроможності ворога на півдні України.",
    date: "05 серпня 11:00",
    image: "/image/image.jpg",
  },
  {
    id: 4,
    text: 'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
    date: "05 серпня 11:00",
    image: "/image/image.jpg",
  },
  {
    id: 5,
    text: "ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи.",
    date: "05 серпня 11:00",
    image: "/image/image.jpg",
  },
  {
    id: 6,
    text: "Білорусь несподівано вирішила провести військові навчання з Казахстаном: що відомо.",
    date: "05 серпня 11:00",
    image: "/image/image.jpg",
  },
  {
    id: 7,
    text: "Білорусь несподівано вирішила провести військові навчання з Казахстаном: що відомо.",
    date: "05 серпня 11:00",
    image: "/image/image_5.jpg",
    interview: true,
  },
  {
    id: 8,
    text: 'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.',
    date: "05 серпня 11:00",
    image: "/image/image.jpg",
  },
  {
    id: 9,
    text: "ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи.",
    date: "05 серпня 11:00",
    image: "/image/image.jpg",
  },
];
const title = {
  kyiv: "Київ",
  odesa: "Одеса",
  kharkiv: "Харків",
};
const buttonFilter = [
  { name: "Київ", value: "kyiv" },
  { name: "Одеса", value: "odesa" },
  { name: "Харків", value: "kharkiv" },
];

const Content = () => {
  const clientWidth = useContext(Context);
  const [filter, setFilter] = useState("kyiv");

  return (
    <>
      <WrapContentBlock title="Вибір редакції">
        <ArticleCards articles={articles.slice(0, 6)} />
      </WrapContentBlock>

      <WrapContentBlock
        title="Регіони"
        link={<Button children="Всі новини розділу" type="orange" />}
      >
        {clientWidth <= 768 && (
          <FilterItem items={buttonFilter} filter={filter} />
        )}
        <div className={styles.wrapContent}>
          {Object.keys(data).map((city, i) => {
            return (
              <WrapContent
                key={i}
                clazz={"regions"}
                title={title[city]}
                type={"next"}
                childrenBtn="Більше новин"
              >
                <div className={styles.wrapData}>
                  {data[city].map((item, i) => (
                    <React.Fragment key={i}>
                      <div className={styles.date}>{item.date}</div>
                      <NewsList data={item.data} style="regions" />
                    </React.Fragment>
                  ))}
                </div>
              </WrapContent>
            );
          })}
        </div>
      </WrapContentBlock>
    </>
  );
};

export default Content;
