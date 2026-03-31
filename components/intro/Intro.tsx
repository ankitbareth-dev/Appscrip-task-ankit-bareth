import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.description}>
          Explore our curated collection of premium products designed to elevate
          your everyday experience. We blend modern aesthetics quality to bring
          you items that are both functional and inspiring.
        </p>
      </div>
    </section>
  );
}
