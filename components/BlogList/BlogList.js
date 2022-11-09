import BlogItem from "./BlogItem";
import styles from "./BlogList.module.scss";

const data = [
  {
    id: 1,
    name: "Юлія Стахівська",
    profession: "письменниця",
    text: "Жінок в часи небезпеки приваблюють сильні чоловіки",
    date: "04 серпня 15:15",
  },
  {
    id: 2,
    name: "Юрій Андрухович",
    profession: "письменник",
    text: "Штайнмаєр - людина-формула",
    date: "04 серпня 15:15",
  },
  {
    id: 3,
    name: "Анна Прокопенко",
    profession: "журналістка",
    text: "Щоденник війни. П'ятий тиждень довгого лютого",
    date: "04 серпня 15:15",
  },
  {
    id: 4,
    name: "Ірена Карпа",
    profession: "журналістка",
    text: "Не пощастило з географією. Небезпечний сусід",
    date: "04 серпня 15:15",
  },
];

const BlogList = () => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <BlogItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default BlogList;
