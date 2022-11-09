import WrapContent from "../WrapContent/WrapContent";
import BlogList from "../BlogList/BlogList";

const Sidebar = () => {
  return (
    <WrapContent
      title="Колонки"
      linkType="orange"
      childrenLink="Всі колонки"
      type="border-black"
      childrenBtn="Всі колонки"
      clazz="blog"
    >
      <BlogList />
    </WrapContent>
  );
};

export default Sidebar;
