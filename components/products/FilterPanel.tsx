"use client";

import styles from "./FilterPanel.module.css";

interface FilterPanelProps {
  isOpen: boolean;
}

export default function FilterPanel({ isOpen }: FilterPanelProps) {
  return (
    <div className={`${styles.panelContainer} ${isOpen ? styles.isOpen : ""}`}>
      <div className={styles.panelInner}></div>
    </div>
  );
}
