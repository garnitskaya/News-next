import Container from "../Container/Container";
import Socials from "../Socials/Socials";
import List from "./../List/List";

import styles from './Footer.module.scss';

const navigation = [
  { id: 1, title: "Про нас", path: "/" },
  { id: 2, title: "Контакти", path: "/" },
  { id: 3, title: "Структура власності", path: "/" },
  { id: 4, title: "Команда", path: "/" },
  { id: 5, title: "Медіакіт", path: "/" },
];

const links = [
  { id: 1, title: "Всі новини", path: "/" },
  { id: 2, title: "COVID-19", path: "/" },
  { id: 3, title: "Війна", path: "/" },
  {
    id: 4,
    title: "Політика",
    path: "/",
    links: [
      { id: 1, title: "Україна", path: "/" },
      { id: 2, title: "Світ", path: "/" },
    ],
  },
  {
    id: 5,
    title: "Здоров’я",
    path: "/",
    links: [
      { id: 1, title: "Дієти", path: "/" },
      { id: 2, title: "Краса", path: "/" },
      { id: 3, title: "Секс", path: "/" },
      { id: 4, title: "Психологія", path: "/" },
      { id: 5, title: "Медицина", path: "/" },
    ],
  },
  {
    id: 6,
    title: "Події",
    path: "/",
    links: [
      { id: 1, title: "ДТП", path: "/" },
      { id: 2, title: "Катастрофи", path: "/" },
      { id: 3, title: "Кримінал", path: "/" },
    ],
  },
  {
    id: 7,
    title: "Лайфстайл",
    path: "/",
    links: [
      { id: 1, title: "Історії з життя", path: "/" },
      { id: 2, title: "Подорожі", path: "/" },
      { id: 3, title: "Кухня", path: "/" },
      { id: 4, title: "Шоубізнес", path: "/" },
      { id: 5, title: "Мода та стиль", path: "/" },
      { id: 6, title: "Зірковий гороскоп", path: "/" },
    ],
  },
  {
    id: 8,
    title: "Суспільство",
    path: "/",
    links: [
      { id: 1, title: "Охорона здоров’я", path: "/" },
      { id: 2, title: "Безпека", path: "/" },
      { id: 3, title: "Екологія", path: "/" },
      { id: 4, title: "Релігія", path: "/" },
    ],
  },
  {
    id: 9,
    title: "Регіони",
    path: "/",
    links: [
      { id: 1, title: "Київ", path: "/" },
      { id: 2, title: "Одеса", path: "/" },
      { id: 3, title: "Харків", path: "/" },
      { id: 4, title: "Львів", path: "/" },
    ],
  },
  {
    id: 10,
    title: "Техно",
    path: "/",
    links: [
      { id: 1, title: "Наука", path: "/" },
      { id: 2, title: "Гаджети", path: "/" },
      { id: 3, title: "ІТ", path: "/" },
      { id: 4, title: "Космос", path: "/" },
    ],
  },
  {
    id: 11,
    title: "Економіка",
    path: "/",
    links: [
      { id: 1, title: "Фінанси", path: "/" },
      { id: 2, title: "Комунальні послуги", path: "/" },
      { id: 3, title: "Бізнес", path: "/" },
      { id: 4, title: "Львів", path: "/" },
    ],
  },
  {
    id: 12,
    title: "Спорт",
    path: "/",
  },
];

const socials = [
  { id: 1, icon: "YouTube-logo", name: "YouTube", path: "https://youtube.com" },
  { id: 2, icon: "Telegram-logo", name: "Telegram", path: "https://t.me" },
  {
    id: 3,
    icon: "Instagra-logo",
    name: "Instagram",
    path: "https://instagram.com",
  },
  {
    id: 4,
    icon: "Facebook-logo",
    name: "Facebook",
    path: "https://facebook.com/",
  },
  {
    id: 5,
    icon: "TikTok-logo",
    name: "TikTok",
    path: "https://www.tiktok.com/",
  },
  {
    id: 6,
    icon: "Google News-logo",
    name: "Google News",
    path: "https://news.google.com/",
  },
];

const FooterTop = () => {
  return (
    <div className={styles.blocks}>
      <Container>
        <div className={styles.wrapper}>
          <List
            list={links}
            classMenu={styles.menu}
            classSubMenu={styles.submenu}
          />
          <List list={navigation} classMenu={styles.navMenu} />
        </div>
        <div className={styles.socials}>
          <h3 className={styles.title}>Новини у зручному форматі</h3>
          <Socials socials={socials} clazz={styles.socialsFooter} />
        </div>
      </Container>
    </div>
  );
};

export default FooterTop;