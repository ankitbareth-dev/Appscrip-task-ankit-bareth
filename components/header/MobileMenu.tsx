"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./MobileMenu.module.css";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={styles.menuBtn}
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Image src="/menu-icon.svg" alt="" width={20} height={20} />
      </button>

      <div className={`${styles.overlay} ${isOpen ? styles.active : ""}`}>
        <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
          <button
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li>
                <a href="#" onClick={() => setIsOpen(false)}>
                  SHOP
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setIsOpen(false)}>
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setIsOpen(false)}>
                  STORIES
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setIsOpen(false)}>
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setIsOpen(false)}>
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
