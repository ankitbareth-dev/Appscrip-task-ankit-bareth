"use client";

import SortDropdown from "./SortDropdown";
import styles from "./ProductListingHeader.module.css";

interface ProductListingHeaderProps {
  isFilterOpen: boolean;
  onToggleFilter: () => void;
}

export default function ProductListingHeader({
  isFilterOpen,
  onToggleFilter,
}: ProductListingHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <span className={styles.itemCount}>3425 ITEMS</span>
        <span className={styles.separator}>&gt;</span>

        <span
          className={styles.filterDesktop}
          onClick={onToggleFilter}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onToggleFilter();
            }
          }}
        >
          {isFilterOpen ? "HIDE FILTER" : "SHOW FILTER"}
        </span>
      </div>

      <span className={styles.filterMobile}>FILTER</span>

      <div className={styles.divider}>|</div>

      <SortDropdown />
    </div>
  );
}
