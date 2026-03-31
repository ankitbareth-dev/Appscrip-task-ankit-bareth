import ProductCard from "./ProductCard";
import ProductListingShell from "./ProductListingShell";

const productImage = "/Image.svg";

export default function Products() {
  return (
    <ProductListingShell>
      {Array.from({ length: 16 }).map((_, index) => (
        <ProductCard
          key={index}
          imageUrl={productImage}
          title="PPXOC MILKYWAY DRESS IN GREEN PRINTED PURE SILK"
        />
      ))}
    </ProductListingShell>
  );
}
