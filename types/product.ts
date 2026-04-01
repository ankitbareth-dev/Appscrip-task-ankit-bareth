export interface Product {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
  meta: {
    createdAt: string;
    updatedAt: string;
  };
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
