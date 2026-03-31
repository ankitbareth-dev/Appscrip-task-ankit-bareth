"use client";

import { useState, useCallback } from "react";
import ProductListingHeader from "./ProductListingHeader";
import FilterPanel from "./FilterPanel";
import styles from "./Products.module.css";

export default function ProductListingShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = useCallback(() => {
    setIsFilterOpen((prev) => !prev);
  }, []);

  return (
    <section>
      <ProductListingHeader
        isFilterOpen={isFilterOpen}
        onToggleFilter={toggleFilter}
      />

      <div className={styles.layoutContainer}>
        <FilterPanel isOpen={isFilterOpen} />

        <div
          className={`${styles.grid} ${isFilterOpen ? styles.filterOpen : ""}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
