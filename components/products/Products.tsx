import ProductCard from "./ProductCard";
import ProductListingShell from "./ProductListingShell";
import { getProducts } from "@/services/products";
import { Product } from "@/types/product";
import styles from "./Products.module.css";

export default async function Products() {
  let products: Product[] = [];

  try {
    const data = await getProducts();
    products = data.products;
  } catch {}

  if (products.length === 0) {
    return (
      <ProductListingShell>
        <div className={styles.error}>
          <p>Sorry, unable to fetch products.</p>
        </div>
      </ProductListingShell>
    );
  }

  return (
    <ProductListingShell>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.thumbnail}
          title={product.title}
        />
      ))}
    </ProductListingShell>
  );
}
