import { Product } from "@/lib/types";

export default function useProduct(product: Product) {
  const addToCart = () => {
    console.log("Added to Cart", product);
  };
  return { addToCart };
}
