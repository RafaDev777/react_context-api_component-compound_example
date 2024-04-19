import { useProductCardContext } from "@/lib/contexts";

export default function ProductTitle() {
  const { product } = useProductCardContext();

  return <div className="ProductCard_title">{product.title}</div>;
}
