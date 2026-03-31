"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import styles from "./ProductListingHeader.module.css";

const SORT_OPTIONS = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE: HIGH TO LOW",
  "PRICE: LOW TO HIGH",
];

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSelect = useCallback((option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  }, []);

  return (
    <div className={styles.rightContainer}>
      <div
        className={styles.rightSide}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleDropdown();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <span className={styles.recommendedText}>{selectedOption}</span>
        <Image
          className={`${styles.arrowIcon} ${isOpen ? styles.arrowRotated : ""}`}
          src="/arrow-down.svg"
          alt=""
          width={16}
          height={16}
        />
      </div>

      {isOpen && (
        <div className={styles.dropdown} role="listbox">
          {SORT_OPTIONS.map((option) => (
            <div
              key={option}
              className={styles.dropdownItem}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={option === selectedOption}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
