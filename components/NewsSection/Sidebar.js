import { useState } from "react";

import FilterItem from "../FilterItem/FilterItem";
import WrapContent from "../WrapContent/WrapContent";
import NewsList from "../NewsList/NewsList";
import Button from "../Button/Button";

const buttonFilter = [
  { name: "Всі", value: "" },
  { name: "Новини", value: "news" },
  { name: "Статті", value: "articles" },
];

const data = [
  {
    id: 1,
    path: "/",
    time: "14:59",
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
  },
  {
    id: 2,
    path: "/",
    time: "14:59",
    text: "До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини",
    label: "Новина з фото",
    icon: "/icons/camera.svg",
  },
  {
    id: 3,
    path: "/",
    time: "14:59",
    text: "Прем'єрка Швеції відвідала потрощені росіянами Бучу й Бородянку: реакція на побачене",
  },
  {
    id: 4,
    path: "/",
    time: "14:59",
    text: "До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини",
    label: "Термінова новина",
    icon: "/icons/fire_.svg",
    important: true,
  },
  {
    id: 5,
    path: "/",
    time: "14:59",
    text: "Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф",
  },
  {
    id: 6,
    path: "/",
    time: "14:59",
    text: "До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини",
  },
  {
    id: 7,
    path: "/",
    time: "14:59",
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
  },
  {
    id: 8,
    path: "/",
    time: "14:59",
    text: "Дружина Зеленського чесно зізналася, чи боїться смерті",
  },
  {
    id: 9,
    path: "/",
    time: "14:59",
    text: '"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
  },
  {
    id: 10,
    path: "/",
    time: "14:59",
    text: "Жданов назвав три питання, які обговорять путін і Ердоган",
  },
];

const Sidebar = () => {
  const [filter, setFilter] = useState("");

  return (
    <WrapContent
      clazz="news"
      title="Всі новини"
      childrenLink="Архів"
      linkType="blue"
      filter={<FilterItem items={buttonFilter} filter={filter} />}
      childrenBtn={" Завантажити ще"}
      type={"load"}
    >
      <NewsList data={data} style="gradient" />
    </WrapContent>
  );
};

export default Sidebar;
