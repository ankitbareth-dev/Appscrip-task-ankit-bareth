import Image from "next/image";
import styles from "./LogoSection.module.css";

export default function LogoSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Image src="/Logo.svg" alt="logo" width={36} height={36} />
      </div>

      <div className={styles.center}>
        <span className={styles.logoText}>LOGO</span>
      </div>

      <div className={styles.right}>
        <Image src="/search-normal.svg" alt="" width={24} height={24} />
        <Image src="/heart.svg" alt="" width={24} height={24} />
        <Image src="/shopping-bag.svg" alt="" width={24} height={24} />
        <Image src="/profile.svg" alt="" width={24} height={24} />

        <div className={styles.lang}>ENG</div>
      </div>
    </div>
  );
}
