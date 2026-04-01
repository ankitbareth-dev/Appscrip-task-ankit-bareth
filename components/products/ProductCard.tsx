import Image from "next/image";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  imageUrl: string;
  title: string;
}

export default function ProductCard({ imageUrl, title }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={title}
          className={styles.image}
          fill
          sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
        />
      </div>

      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.pricingRow}>
          <p className={styles.pricing}>
            Sign in or Create an account to see pricing
          </p>
          <Image
            className={styles.heartIcon}
            src="/logo-section/heart.svg"
            alt="Add to favorites"
            width={20}
            height={20}
          />
        </div>
      </div>
    </article>
  );
}
