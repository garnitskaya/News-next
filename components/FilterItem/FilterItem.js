import styles from "./FilterItem.module.scss";

const FilterItem = ({ items, filter, onFilterChange }) => {
  return (
    <div className={styles.filter}>
      {items.map(({ name, value }) => {
        const isActive = filter === value;
        return (
          <button
            key={name}
            className={`${isActive && styles.active} ${styles.button}`}
            onClick={() => console.log(value)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default FilterItem;
