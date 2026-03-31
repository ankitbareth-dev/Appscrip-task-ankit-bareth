import ProductListingHeader from "./ProductListingHeader";
import ProductCard from "./ProductCard";
import styles from "./Products.module.css";

const productImage = "/Image.svg";

export default function Products() {
  return (
    <section>
      <ProductListingHeader />
      <div className={styles.grid}>
        {Array.from({ length: 16 }).map((_, index) => (
          <ProductCard
            key={index}
            imageUrl={productImage}
            title="PPXOC MILKYWAY DRESS IN GREEN PRINTED PURE SILK"
          />
        ))}
      </div>
    </section>
  );
}
