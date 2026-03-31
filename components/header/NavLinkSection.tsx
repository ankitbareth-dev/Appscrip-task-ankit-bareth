import styles from "./NavLinkSection.module.css";

export default function NavLinkSection() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <a href="#">SHOP</a>
        </li>
        <li>
          <a href="#">SKILLS</a>
        </li>
        <li>
          <a href="#">STORIES</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">CONTACT US</a>
        </li>
      </ul>
    </nav>
  );
}
