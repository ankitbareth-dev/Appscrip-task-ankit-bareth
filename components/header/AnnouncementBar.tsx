import Image from "next/image";
import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className={`${styles.item} ${styles.hideMobile}`}>
        <Image src="/element-4.svg" alt="" width={16} height={16} />
        <span>Lorem ipsum dolor</span>
      </div>

      <div className={`${styles.item} ${styles.hideMobile}`}>
        <Image src="/element-4.svg" alt="" width={16} height={16} />
        <span>Lorem ipsum dolor</span>
      </div>

      <div className={styles.item}>
        <Image src="/element-4.svg" alt="" width={16} height={16} />
        <span>Lorem ipsum dolor</span>
      </div>
    </div>
  );
}
