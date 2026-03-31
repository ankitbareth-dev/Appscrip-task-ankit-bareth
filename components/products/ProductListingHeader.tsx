import Image from "next/image";
import styles from "./ProductListingHeader.module.css";

export default function ProductListingHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <span className={styles.itemCount}>3425 ITEMS</span>
        <span className={styles.separator}>&gt;</span>
        <span className={styles.filterDesktop}>SHOW FILTER</span>
      </div>

      <span className={styles.filterMobile}>FILTER</span>

      <div className={styles.divider}>|</div>

      <div className={styles.rightSide}>
        <span className={styles.recommendedText}>RECOMMENDED</span>
        <Image
          className={styles.arrowIcon}
          src="/arrow-down.svg"
          alt=""
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}
