import Image from "next/image";
import Link from "next/link";

import styles from "./ArticleCards.module.scss";

const ActicleCard = ({ image, date, text, interview }) => {
  return (
    <Link href={"/"} className={styles.card}>
      <Image
        className={styles.image}
        src={image}
        alt="image"
        width={304}
        height={171}
      />
      <div className={styles.date}>
        {date}
        {interview ? (
          <span className={styles.interview}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2518_1237)">
                <path
                  d="M6.22666 7.19533C5.59234 6.39445 5.27825 5.38643 5.3454 4.36699C5.41254 3.34755 5.85611 2.38943 6.59 1.67866L7.012 1.25599C7.72281 0.522392 8.68084 0.0790551 9.70013 0.012039C10.7194 -0.0549772 11.7272 0.259108 12.528 0.893328C12.9563 1.24849 13.3051 1.68985 13.5516 2.18869C13.798 2.68753 13.9368 3.23268 13.9587 3.78866C13.9821 4.34225 13.8905 4.89468 13.6895 5.41105C13.4886 5.92742 13.1828 6.3965 12.7913 6.78866L12.1247 7.45533C11.3733 8.20506 10.3554 8.62649 9.294 8.62733C9.23666 8.62733 9.17933 8.626 9.122 8.62333C8.56625 8.60159 8.02129 8.46322 7.52248 8.2172C7.02368 7.97119 6.58219 7.62303 6.22666 7.19533ZM12.5047 10.6667C12.0456 10.6656 11.5908 10.7555 11.1666 10.9311C10.7424 11.1067 10.3573 11.3647 10.0333 11.69C9.09203 12.6367 7.97227 13.3873 6.73889 13.8982C5.50551 14.4092 4.18302 14.6704 2.848 14.6667H2.08133C1.9334 14.6669 1.78873 14.6232 1.66565 14.5411C1.54257 14.4591 1.44661 14.3423 1.38992 14.2057C1.33324 14.069 1.31838 13.9187 1.34724 13.7736C1.37609 13.6285 1.44735 13.4952 1.552 13.3907L2.01866 12.924C3.17617 12.8463 4.26602 12.3507 5.08533 11.5293L7.12133 9.49333C6.38192 9.16483 5.72695 8.6724 5.206 8.05333C4.91484 7.70424 4.6722 7.31741 4.48466 6.90333L2.46666 8.91933C1.64507 9.73846 1.14938 10.8284 1.072 11.986L0.60533 12.4527C0.315629 12.7442 0.118747 13.1149 0.0395182 13.5182C-0.0397104 13.9215 0.00226361 14.3392 0.160146 14.7186C0.318027 15.0981 0.584745 15.4223 0.926655 15.6503C1.26856 15.8784 1.67035 16 2.08133 16H2.848C4.35811 16.0041 5.85404 15.7087 7.2492 15.1308C8.64437 14.5529 9.91108 13.704 10.976 12.6333C11.2783 12.331 11.6635 12.1252 12.0828 12.0418C12.5021 11.9583 12.9367 12.0011 13.3317 12.1646C13.7267 12.3282 14.0643 12.6051 14.302 12.9605C14.5396 13.3159 14.6665 13.7338 14.6667 14.1613V15.3333C14.6667 15.5101 14.7369 15.6797 14.8619 15.8047C14.9869 15.9298 15.1565 16 15.3333 16C15.5101 16 15.6797 15.9298 15.8047 15.8047C15.9298 15.6797 16 15.5101 16 15.3333V14.1613C15.9988 13.2347 15.6301 12.3465 14.9748 11.6914C14.3196 11.0362 13.4312 10.6677 12.5047 10.6667Z"
                  fill="#979EA9"
                />
              </g>
              <defs>
                <clipPath id="clip0_2518_1237">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Інтерв’ю
          </span>
        ) : null}
      </div>
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default ActicleCard;
