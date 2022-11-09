import { useState } from "react";
import HeroSectionBloks from "./HeroSectionBloks";
import styles from "./HeroSection.module.scss";

const data = [
  {
    id: 1,
    title:
      "Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»",
  },
  {
    id: 2,
    title:
      "Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження",
  },
  {
    id: 3,
    title: 'Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини',
  },
  {
    id: 4,
    title: "Сейм Латвії визнав рф країною-спонсором тероризму",
  },
  {
    id: 5,
    title: "Сейм Латвії визнав рф країною-спонсором тероризму",
  },
];

const Content = () => {
  const [activeBlock, setActiveBlock] = useState(1);
  const [offset, setOffset] = useState(0);

  const handlePrevbtn = () => {
    if (activeBlock <= 1 && offset < 0) {
      setOffset(() => (offset = 336 * data.length));
      return;
    } else {
      if (activeBlock === 4) {
        setOffset((offset) => (offset -= 336));
      }
      setActiveBlock(activeBlock - 1);
    }
  };

  const handleNextbtn = () => {
    if (activeBlock >= data.length && offset > 336 * data.length) {
      setOffset(0);
      return;
    } else {
      if (activeBlock === 4) {
        setOffset((offset) => (offset += 336));
      }
      setActiveBlock(activeBlock + 1);
    }
  };

  return (
    <div className={styles.flex}>
      <h1 className={styles.title}>{data[activeBlock - 1].title}</h1>

      <div className={styles.btns}>
        <button
          disabled={activeBlock <= 1}
          onClick={handlePrevbtn}
          className={styles.btn}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2438_902)">
              <path
                d="M8.49905 12.0001C8.56486 12.0005 8.63009 11.9879 8.69101 11.963C8.75193 11.9381 8.80733 11.9014 8.85405 11.8551C8.90092 11.8086 8.93812 11.7533 8.9635 11.6924C8.98888 11.6315 9.00195 11.5661 9.00195 11.5001C9.00195 11.4341 8.98888 11.3687 8.9635 11.3078C8.93812 11.2469 8.90092 11.1916 8.85405 11.1451L4.76905 7.06009C4.48815 6.77884 4.33037 6.39759 4.33037 6.00009C4.33037 5.60259 4.48815 5.22134 4.76905 4.94009L8.85405 0.855093C8.94821 0.760941 9.0011 0.633244 9.0011 0.500093C9.0011 0.366942 8.94821 0.239245 8.85405 0.145093C8.7599 0.0509408 8.6322 -0.00195312 8.49905 -0.00195312C8.3659 -0.00195313 8.23821 0.0509408 8.14405 0.145093L4.05905 4.23009C3.82624 4.46232 3.64152 4.7382 3.51549 5.04192C3.38946 5.34565 3.32458 5.67126 3.32458 6.00009C3.32458 6.32893 3.38946 6.65453 3.51549 6.95826C3.64152 7.26199 3.82624 7.53786 4.05905 7.77009L8.14405 11.8551C8.19077 11.9014 8.24618 11.9381 8.3071 11.963C8.36802 11.9879 8.43325 12.0005 8.49905 12.0001Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2438_902">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="matrix(-1 0 0 1 12 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        <div className={styles.num}>
          <span className={activeBlock === 1 ? styles.active : ""}>
            {activeBlock}
          </span>{" "}
          /
          <span className={activeBlock === data.length ? styles.active : ""}>
            {data.length}
          </span>
        </div>

        <button
          disabled={activeBlock >= data.length}
          onClick={handleNextbtn}
          className={styles.btn}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2438_909)">
              <path
                d="M3.50095 12.0001C3.43514 12.0005 3.36991 11.9879 3.30899 11.963C3.24807 11.9381 3.19267 11.9014 3.14595 11.8551C3.09908 11.8086 3.06188 11.7533 3.0365 11.6924C3.01112 11.6315 2.99805 11.5661 2.99805 11.5001C2.99805 11.4341 3.01112 11.3687 3.0365 11.3078C3.06188 11.2469 3.09908 11.1916 3.14595 11.1451L7.23095 7.06009C7.51185 6.77884 7.66963 6.39759 7.66963 6.00009C7.66963 5.60259 7.51185 5.22134 7.23095 4.94009L3.14595 0.855093C3.05179 0.760941 2.9989 0.633244 2.9989 0.500093C2.9989 0.366942 3.05179 0.239245 3.14595 0.145093C3.2401 0.0509408 3.3678 -0.00195312 3.50095 -0.00195312C3.6341 -0.00195313 3.76179 0.0509408 3.85595 0.145093L7.94095 4.23009C8.17376 4.46232 8.35848 4.7382 8.48451 5.04192C8.61054 5.34565 8.67542 5.67126 8.67542 6.00009C8.67542 6.32893 8.61054 6.65453 8.48451 6.95826C8.35848 7.26199 8.17376 7.53786 7.94095 7.77009L3.85595 11.8551C3.80923 11.9014 3.75382 11.9381 3.6929 11.963C3.63198 11.9879 3.56675 12.0005 3.50095 12.0001Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2438_909">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <HeroSectionBloks
        data={data}
        setActiveBlock={setActiveBlock}
        activeBlock={activeBlock}
        offset={offset}
      />
    </div>
  );
};

export default Content;
