import { ProductsResponse } from "@/types/product";

export async function getProducts(): Promise<ProductsResponse> {
  const res = await fetch("https://dummyjson.com/products?limit=16", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.json();
}
