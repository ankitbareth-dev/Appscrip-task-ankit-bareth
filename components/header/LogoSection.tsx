import Image from "next/image";
import styles from "./LogoSection.module.css";

export default function LogoSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Image
          className={`${styles.icon} ${styles.hideTablet}`}
          src="/menu-icon.svg"
          alt="Open menu"
          width={20}
          height={20}
        />
        <Image
          className={styles.icon}
          src="/Logo.svg"
          alt="Logo"
          width={36}
          height={36}
        />
      </div>

      <div className={styles.center}>
        <span className={styles.logoText}>LOGO</span>
      </div>

      <div className={styles.right}>
        <Image
          className={styles.icon}
          src="/search-normal.svg"
          alt="Search"
          width={24}
          height={24}
        />
        <Image
          className={styles.icon}
          src="/heart.svg"
          alt="Favorites"
          width={24}
          height={24}
        />
        <Image
          className={styles.icon}
          src="/shopping-bag.svg"
          alt="Cart"
          width={24}
          height={24}
        />

        <Image
          className={`${styles.icon} ${styles.hideMobile}`}
          src="/profile.svg"
          alt="Account"
          width={24}
          height={24}
        />
        <div className={`${styles.lang} ${styles.hideMobileBlock}`}>ENG</div>
      </div>
    </div>
  );
}
