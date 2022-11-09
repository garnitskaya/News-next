import styles from "./SearchItem.module.scss";

const SearchItem = () => {
  return (
    <label className={styles.block}>
      <input className={styles.item} type="text" placeholder="пошук новин" />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_6898)">
          <path
            d="M15.7075 14.2968L12.6108 11.1987C14.9279 8.10222 14.2961 3.71356 11.1996 1.39641C8.10308 -0.920736 3.71441 -0.288925 1.39727 2.80759C-0.919881 5.90411 -0.288071 10.2928 2.80845 12.6099C5.29582 14.4712 8.71218 14.4712 11.1996 12.6099L14.2977 15.708C14.687 16.0973 15.3182 16.0973 15.7075 15.708C16.0968 15.3187 16.0968 14.6874 15.7075 14.2982L15.7075 14.2968ZM7.02984 12.012C4.2778 12.012 2.04686 9.78102 2.04686 7.02898C2.04686 4.27695 4.2778 2.04601 7.02984 2.04601C9.78187 2.04601 12.0128 4.27695 12.0128 7.02898C12.0099 9.77977 9.78066 12.009 7.02984 12.012Z"
            fill="#2D2D2D"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_6898">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </label>
  );
};

export default SearchItem;
