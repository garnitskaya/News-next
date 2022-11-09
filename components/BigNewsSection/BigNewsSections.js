import Container from "../Container/Container";
import Sidebar from "./Sidebar";
import Content from "./Content";
import styles from "./BigNewsSections.module.scss";

const data = {
  politics: [
    {
      id: 1,
      path: "/",
      time: "14:59",
      text: "До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини",
      label: "Термінова новина",
      icon: "/icons/fire_.svg",
      important: true,
    },
    {
      id: 2,
      path: "/",
      time: "14:59",
      text: "Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф",
    },
    {
      id: 3,
      path: "/",
      time: "14:59",
      text: "До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини",
      label: "Новина з відео",
      icon: "/icons/video.svg",
    },
    {
      id: 4,
      path: "/",
      time: "14:59",
      text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    },
    {
      id: 5,
      path: "/",
      time: "14:59",
      text: '"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
    },
  ],
  economy: [
    {
      id: 6,
      path: "/",
      time: "14:59",
      text: "McDonald’s відновлює роботу ресторанів в Україні: де відкриються перші",
    },
    {
      id: 7,
      path: "/",
      time: "14:59",
      text: "Рада готує новий податковий сюрприз для обмінників: Гетманцев дав роз'яснення",
      label: "Онлайн",
      icon: "/icons/online.svg",
      important: true,
    },
    {
      id: 8,
      path: "/",
      time: "14:59",
      text: "Росія хоче перемкнути Запорізьку АЕС на Крим: експерт пояснив шанси і ризики",
    },
    {
      id: 9,
      path: "/",
      time: "14:59",
      text: '"Як Ощадбанк під час війни безперебійно підтримує аграріїв',
    },
    {
      id: 10,
      path: "/",
      time: "14:59",
      text: '"Переселенці зможуть отримувати виплати навіть у разі втрати паспорта: що відомо',
    },
  ],
  lifestyle: [
    {
      id: 11,
      path: "/",
      time: "14:59",
      text: "Що подивитися ввечері: топ-5 українських фільмів",
    },
    {
      id: 12,
      path: "/",
      time: "14:59",
      text: "Яке свято відзначають 9 серпня: прикмети, традиції та заборони цього дня",
      label: "Ексклюзив",
      icon: "/icons/exclusive.svg",
      important: true,
    },
    {
      id: 13,
      path: "/",
      time: "14:59",
      text: "Вакарчук виклав неймовірне відео виконання гімну України в Іспанії",
      label: "Новина з відео",
      icon: "/icons/video.svg",
    },
    {
      id: 14,
      path: "/",
      time: "14:59",
      text: '"Топ-7 повсякденних речей, які не мінялися протягом століть',
    },
    {
      id: 15,
      path: "/",
      time: "14:59",
      text: '"Арестович розповів про шалений заробіток, трьох дружин і дітей. Відео',
    },
  ],
  promo: [
    {
      id: 1,
      text: "Акція! Телевізори Samsung з вигодою та в оплату частинами до 12 платежів",
      date: "05 серпня 11:00",
      image: "/image/image_6.png",
    },
    {
      id: 2,
      text: "Замовте нові флагмани Samsung Galaxy Fold4|Flip4 і отримуйте подарунки",
      date: "05 серпня 11:00",
      image: "/image/image_6.png",
    },
    {
      id: 3,
      text: "Зустрічай нову серію смартфонів та навушників від Samsung",
      date: "05 серпня 11:00",
      image: "/image/image_6.png",
    },
    {
      id: 4,
      text: "Мобільний телефон Xiaomi Redmi 9C 3/64GB",
      date: "05 серпня 11:00",
      image: "/image/image_6.png",
    },
  ],
};

const BigNewsSections = () => {
  return (
    <section className={styles.block}>
      <Container>
        <div className={styles.flex}>
          <Sidebar />
          <div className={styles.content}>
            <Content data={data} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BigNewsSections;
