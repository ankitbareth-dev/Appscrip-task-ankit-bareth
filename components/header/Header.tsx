import AnnouncementSection from "./AnnouncementSection";
import NavLinkSection from "./NavLinkSection";
import LogoSection from "./LogoSection";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <AnnouncementSection />
      <LogoSection />
      <NavLinkSection />
    </header>
  );
}
