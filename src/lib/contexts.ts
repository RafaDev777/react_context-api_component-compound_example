import { createContext, useContext } from "react";
import { Product } from "@/lib/types";

const ProductCardContext = createContext<{ product: Product } | null>(null);

export function useProductCardContext() {
  const ctx = useContext(ProductCardContext);
  if (!ctx) {
    throw new Error(
      "ProductCard.* component must be as child of ProductCard Component",
    );
  }
  return ctx;
}

export { ProductCardContext };
