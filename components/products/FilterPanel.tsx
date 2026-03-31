"use client";

import { useState } from "react";
import styles from "./FilterPanel.module.css";

interface FilterPanelProps {
  isOpen: boolean;
}

const FILTER_SECTIONS = [
  { id: "ideal-for", label: "IDEAL FOR", type: "collapsible" },
  { id: "occasion", label: "OCCASION", type: "static" },
  { id: "work", label: "WORK", type: "static" },
  { id: "fabric", label: "FABRIC", type: "static" },
  { id: "segment", label: "SEGMENT", type: "static" },
  { id: "suitable-for", label: "SUITABLE FOR", type: "static" },
  { id: "raw-materials", label: "RAW MATERIALS", type: "static" },
  { id: "pattern", label: "PATTERN", type: "static" },
];

export default function FilterPanel({ isOpen }: FilterPanelProps) {
  const [isIdealForOpen, setIsIdealForOpen] = useState(false);

  return (
    <div className={`${styles.panelContainer} ${isOpen ? styles.isOpen : ""}`}>
      <div className={styles.panelInner}>
        <div className={styles.sectionList}>
          {FILTER_SECTIONS.map((section) => (
            <div key={section.id} className={styles.sectionWrapper}>
              <div
                className={`${styles.sectionHeader} ${section.type === "collapsible" ? styles.clickable : ""}`}
                onClick={() => {
                  if (section.type === "collapsible") {
                    setIsIdealForOpen((prev) => !prev);
                  }
                }}
              >
                <div className={styles.headerLeft}>
                  <span>{section.label}</span>
                  {section.type === "collapsible" && (
                    <svg
                      className={`${styles.arrowIcon} ${isIdealForOpen ? styles.arrowOpen : ""}`}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </div>
                <span className={styles.allText}>All</span>
              </div>

              {section.type === "collapsible" && isIdealForOpen && (
                <div className={styles.accordionContent}>
                  <button className={styles.unselectAllBtn}>
                    Unselect All
                  </button>

                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>Men</span>
                  </label>

                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>Women</span>
                  </label>

                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>Boys And Kids</span>
                  </label>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
