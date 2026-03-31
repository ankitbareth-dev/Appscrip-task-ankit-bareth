import Image from "next/image";
import styles from "./ProductListingHeader.module.css";

export default function ProductListingHeader() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.itemCount}>3425 ITEMS</span>

      <div className={styles.actions}>
        <button className={styles.btn} type="button" aria-label="Show filters">
          <span className={styles.filterMobile}>FILTER</span>
          <span className={styles.filterDesktop}>SHOW FILTER</span>
        </button>

        <button className={styles.btn} type="button" aria-label="Sort products">
          <span>RECOMMENDED</span>
          <Image
            className={styles.arrowIcon}
            src="/arrow-down.svg"
            alt=""
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
}
