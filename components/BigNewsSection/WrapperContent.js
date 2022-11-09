import Button from "../Button/Button";
import FilterItem from "../FilterItem/FilterItem";
import WrapContentBlock from "./../WrapContentBlock/WrapContentBlock";
import styles from "./BigNewsSections.module.scss";

const buttonFilter = [
  { name: "Новости", value: "news" },
  { name: "Статті", value: "articles" },
];

const WrapperContent = ({
  children,
  title,
  subtitle = "Всі новини розділу",
  filter,
  onFilterChange,
  clientWidth,
}) => {
  return (
    <div className={styles.contentBlock}>
      <WrapContentBlock
        title={title}
        link={<Button children={subtitle} type="orange" />}
      >
        <div className={styles.flex}>
          {filter && clientWidth <= 768 && (
            <FilterItem
              items={buttonFilter}
              filter={filter}
              onFilterChange={onFilterChange}
            />
          )}
          {children}
        </div>
      </WrapContentBlock>
    </div>
  );
};

export default WrapperContent;
