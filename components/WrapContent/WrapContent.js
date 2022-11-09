import classNames from "classnames";
import Button from "../Button/Button";
import styles from "./WrapContent.module.scss";
import { useContext } from "react";
import { Context } from "./../../contexts/Contexts";

const WrapContent = ({
  title,
  linkType,
  childrenLink,
  filter,
  children,
  childrenBtn,
  type,
  clazz,
}) => {
  const clientWidth = useContext(Context);
  const classContent = classNames({
    [styles.content]: true,
    [styles.news]: clazz == "news",
    [styles.regions]: clazz == "regions",
    [styles.blog]: clazz == "blog",
  });

  return (
    <div className={`${classContent}`}>
      <div className={styles.titleBlock}>
        <h3 className={styles.title}>{title}</h3>
        <Button type={linkType}>{childrenLink}</Button>
      </div>
      {filter}
      {children}
      {!(clazz == "blog" && clientWidth < 768) ?
        <Button type={type}>{childrenBtn}</Button> :
        null}
    </div>
  );
};

export default WrapContent;
