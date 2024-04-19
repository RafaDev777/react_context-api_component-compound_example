import { useProductCardContext } from "@/lib/contexts";

export default function ProductImage() {
  const { product } = useProductCardContext();
  return (
    <div className="ProductCard_image">
      <img src={product.image} alt="" />
    </div>
  );
}
