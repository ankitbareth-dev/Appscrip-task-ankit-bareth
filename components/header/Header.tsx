import AnnouncementBar from "./AnnouncementBar";
import HeaderNav from "./HeaderNav";
import LogoSection from "./LogoSection";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <AnnouncementBar />
      <LogoSection />
      <HeaderNav />
    </header>
  );
}
