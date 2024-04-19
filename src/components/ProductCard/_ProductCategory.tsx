import { useProductCardContext } from "@/lib/contexts";

export default function ProductCategory() {
  const { product } = useProductCardContext();

  return <div className="ProductCard_category">{product.category}</div>;
}
