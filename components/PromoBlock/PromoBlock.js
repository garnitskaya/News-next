import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./PromoBlock.module.scss";

const PromoBlock = ({ promoSlides }) => {
  const [activeBlock, setActiveBlock] = useState(1);
  const [offset, setOffset] = useState(0);

  const { image, date, text } = promoSlides[activeBlock - 1];

  return (
    <div className={styles.promo}>
      <Link href={"/"} className={styles.block}>
        <Image
          className={styles.image}
          src={image}
          alt="image"
          width={272}
          height={153}
        />
        <div className={styles.item}>
          <div className={styles.date}>
            {date}
            <span className={styles.label}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_3541)">
                  <path
                    d="M15.3333 10.6667C15.2301 10.6667 15.1284 10.6427 15.036 10.5967L13.7027 9.93C13.5444 9.85097 13.4241 9.71231 13.368 9.54452C13.312 9.37674 13.325 9.19358 13.404 9.03533C13.483 8.87709 13.6217 8.75672 13.7895 8.70071C13.9573 8.6447 14.1404 8.65763 14.2987 8.73667L15.632 9.40333C15.7666 9.4704 15.8745 9.581 15.9383 9.71716C16.0021 9.85332 16.018 10.0071 15.9834 10.1534C15.9488 10.2997 15.8658 10.43 15.7478 10.5232C15.6297 10.6164 15.4837 10.667 15.3333 10.6667ZM14.298 4.6L15.6313 3.93333C15.7896 3.8543 15.9099 3.71564 15.966 3.54786C16.022 3.38007 16.009 3.19691 15.93 3.03867C15.851 2.88042 15.7123 2.76005 15.5445 2.70404C15.3767 2.64803 15.1936 2.66097 15.0353 2.74L13.702 3.40667C13.5438 3.4857 13.4234 3.62436 13.3674 3.79214C13.3114 3.95993 13.3243 4.14309 13.4033 4.30133C13.4824 4.45958 13.621 4.57995 13.7888 4.63596C13.9566 4.69197 14.1398 4.67903 14.298 4.6ZM16 6.66667C16 6.48986 15.9298 6.32029 15.8047 6.19526C15.6797 6.07024 15.5101 6 15.3333 6H14C13.8232 6 13.6536 6.07024 13.5286 6.19526C13.4036 6.32029 13.3333 6.48986 13.3333 6.66667C13.3333 6.84348 13.4036 7.01305 13.5286 7.13807C13.6536 7.2631 13.8232 7.33333 14 7.33333H15.3333C15.5101 7.33333 15.6797 7.2631 15.8047 7.13807C15.9298 7.01305 16 6.84348 16 6.66667ZM12 12.6667V0.666667C12 0.489856 11.9298 0.320286 11.8047 0.195262C11.6797 0.0702379 11.5101 0 11.3333 0C11.1565 0 10.987 0.0702379 10.8619 0.195262C10.7369 0.320286 10.6667 0.489856 10.6667 0.666667C10.6667 2.63267 8.94467 3.33333 7.33333 3.33333H2.66667C1.95942 3.33333 1.28115 3.61428 0.781049 4.11438C0.280952 4.61448 0 5.29276 0 6L0 7.33333C0 8.04058 0.280952 8.71885 0.781049 9.21895C1.28115 9.71905 1.95942 10 2.66667 10H7.33333C8.94467 10 10.6667 10.7007 10.6667 12.6667C10.6667 12.8435 10.7369 13.013 10.8619 13.1381C10.987 13.2631 11.1565 13.3333 11.3333 13.3333C11.5101 13.3333 11.6797 13.2631 11.8047 13.1381C11.9298 13.013 12 12.8435 12 12.6667ZM5.45733 11.3333H2.66667C2.35628 11.3321 2.04708 11.2947 1.74533 11.222L3.412 14.9433C3.55198 15.2579 3.78012 15.5251 4.06882 15.7126C4.35753 15.9001 4.6944 16 5.03867 16C5.31257 15.9996 5.58202 15.9307 5.82248 15.7996C6.06293 15.6684 6.26673 15.4791 6.41532 15.249C6.5639 15.0189 6.65254 14.7553 6.67315 14.4822C6.69376 14.2091 6.6457 13.9351 6.53333 13.6853L5.45733 11.3333Z"
                    fill="#979EA9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_3541">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Промо
            </span>
          </div>
          <p className={styles.text}>{text}</p>
        </div>
      </Link>
      <div className={styles.slides}>
        <div className={styles.wrapSlide} >
          {promoSlides.slice(1, promoSlides.length).map(({ id, text, date }) => (
            <div
              key={id}
              className={styles.slide}
              onClick={() => setActiveBlock(id)}
            >
              <div className={styles.date}>{date}</div>
              <p className={styles.slideText}>{text.slice(0, 60) + "..."}</p>
            </div>
          ))}
        </div>
        <div className={styles.btnWrap}>
          <button className={styles.btn}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_3552)">
                <path
                  d="M4.66663 16C4.57889 16.0005 4.49191 15.9837 4.41069 15.9506C4.32946 15.9174 4.25559 15.8685 4.19329 15.8067C4.13081 15.7447 4.08121 15.671 4.04737 15.5898C4.01352 15.5085 3.99609 15.4214 3.99609 15.3334C3.99609 15.2454 4.01352 15.1582 4.04737 15.077C4.08121 14.9958 4.13081 14.922 4.19329 14.86L9.63996 9.41338C10.0145 9.03837 10.2249 8.53004 10.2249 8.00004C10.2249 7.47004 10.0145 6.96171 9.63996 6.58671L4.19329 1.14004C4.06776 1.01451 3.99723 0.844243 3.99723 0.666709C3.99723 0.489174 4.06776 0.318911 4.19329 0.193376C4.31883 0.0678397 4.48909 -0.00268555 4.66663 -0.00268555C4.84416 -0.00268555 5.01442 0.0678397 5.13996 0.193376L10.5866 5.64004C10.897 5.94968 11.1433 6.31752 11.3114 6.72248C11.4794 7.12745 11.5659 7.56159 11.5659 8.00004C11.5659 8.43849 11.4794 8.87263 11.3114 9.2776C11.1433 9.68257 10.897 10.0504 10.5866 10.36L5.13996 15.8067C5.07767 15.8685 5.00379 15.9174 4.92256 15.9506C4.84134 15.9837 4.75436 16.0005 4.66663 16Z"
                  fill="#2D2D2D"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_3552">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBlock;
