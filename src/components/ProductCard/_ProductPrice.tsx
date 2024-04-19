import { useProductCardContext } from "@/lib/contexts";

type TProps = {
  currency?: string;
};

export default function ProductPrice({ currency = "EUR" }: TProps) {
  const { product } = useProductCardContext();

  return (
    <div className="ProductCard_price">
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
      }).format(product.price)}
    </div>
  );
}
