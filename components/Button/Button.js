import classNames from "classnames";
import Link from 'next/link';
import styles from "./Button.module.scss";

const Button = ({ children, type }) => {
  const btnClass = classNames({
    [styles.btn]: true,
    [styles.load]: type === "load",
    [styles.next]: type === "next",
    [styles.more]: type === "more",
    [styles.right]: type === "right",
    [styles.orange]: type === "orange",
    [styles.blue]: type === "blue",
    [styles.borderWhite]: type === "border-white",
    [styles.borderBlack]: type === "border-black",
  });

  return (
    <Link href='/' className={`${btnClass}`}>
      <span>{children}</span>
    </Link>
  );
};

export default Button;
